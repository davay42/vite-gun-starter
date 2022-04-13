import { useGun, hashObj, } from '@composables';
import { reactive } from 'vue'


export const langParts = {
  noun: {
    en: 'noun',
    ru: 'сущ',
    underline: 'solid',
  },
  adj: {
    en: 'adjective',
    ru: 'прил',
    underline: 'wavy',
  },
  verb: {
    en: 'verb',
    ru: 'глаг',
    underline: 'double',
  },
  adv: {
    en: 'adverb',
    ru: 'нареч',
    underline: 'dotted',
  },
}


export function useDefs() {
  const gun = useGun()

  const def = reactive({
    text: '',
    part: null
  })

  async function addDef() {
    const { hash, hashed } = await hashObj(def)
    gun.get('#def').get(hash).put(hashed)
    def.text = ''
    def.part = null
  }

  const defs = reactive({})

  gun.get('#def').map().once((d, k) => {
    defs[k] = JSON.parse(d)
  })
  return { def, addDef, defs }
}


