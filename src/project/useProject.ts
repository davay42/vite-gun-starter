/**
 * [[include:./project/README.md]]
 * @module useProject
 * @group Projects
 */

import { reactive, ref, computed } from 'vue'
import { useGun2, useGun, genUUID } from '../gun/composables'
import { currentRoom } from '../room/composables'
import { useUser } from '../user/composables'

import { hashText, isHash } from '../crypto/composables'

import { ProjectItem, ProjectType } from './useProject.d'


export const newProject: ProjectItem = reactive({
  id: '',
  title: '',
  type: 'project',
  public: true,
  funding: false,
  room: currentRoom.pub,
  author: ''
})

export async function addProject() {
  const gun = useGun()
  const { user } = useUser()

  const id = genUUID(6)
  newProject.author = user.pub

  const link = gun.user().get('projects').get(id).put(newProject, () => {
    if (!newProject.public) return

    gun
      .user(currentRoom.pub)
      .get('projects')
      .get(id + '@' + user.pub)
      .put(
        link,
        undefined,
        {
          opt:
            { cert: currentRoom.features?.projects }
        }
      )
    newProject.title = ''
    newProject.id = ''
  })

}

export function updateProjectField(title: string, field: string, value: string) {
  const gun = useGun();
  const proj = gun.user().get('projects').get(title)
  proj.get(field).put(value, () => {
    proj.get('updated').put(Date.now())
  })
}

export function useProject(path: string) {
  const gun = useGun()

  const project: ProjectItem = reactive({
    id: '0',
    type: 'event'
  })

  gun.user(currentRoom.pub).get('projects').get(path).map().on(async (d, k) => {
    if (k == 'cover' && isHash(d)) {
      project[k] = await gun.get('#cover').get(d).then()
    } else {
      project[k] = d
    }
  })


  function updateField(field: string, value: string) {
    updateProjectField(path.slice(0, -88), field, value)
  }

  async function updateCover(image: string) {
    const hash = await hashText(image)
    if (!hash) return
    gun.get('#cover').get(hash).put(image)
    updateField('cover', hash)
  }

  return { project, updateField, updateCover }
}

export function useComputedProject(path = ref()) {
  const gun = useGun()

  const project = computed(() => {
    const proj: ProjectItem = reactive({
      id: ''
    })
    gun.user(currentRoom.pub).get('projects').get(path.value).map().on(async (d, k) => {
      if (k == 'cover' && isHash(d)) {
        proj[k] = await gun.get('#cover').get(d).then()
      } else {
        proj[k] = d
      }
    })
    return proj
  })

  function updateField(field: string, value: string) {
    updateProjectField(path.value.slice(0, -88), field, value)
  }

  async function updateCover(image: string) {
    const hash = await hashText(image)
    if (!hash) return
    gun.get('#cover').get(hash).put(image)
    updateField('cover', hash)
  }

  return { project, updateField, updateCover }
}



export async function removeProject(path: string) {
  const gun = useGun()
  const gun2 = useGun2()
  const { user } = useUser()

  if (path.includes(user.pub)) {
    gun.user(currentRoom.pub).get('projects').get(path).put(null, undefined, {
      opt:
        { cert: currentRoom.features?.projects }
    })

  } else if (currentRoom.hosts[user.pub]) {
    const pair = await user.decrypt(currentRoom.hosts[user.pub].enc)

    //@ts-ignore
    gun2.user().auth(pair, () => {
      gun2.user().get('projects').get(path).put(null)
    })

  }
  console.error("Can't delete the project")

}

