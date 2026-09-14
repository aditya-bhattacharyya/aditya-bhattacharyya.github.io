import { profile } from '../settings'
import { template } from '../settings'

export function highlightAuthor(authors: string): string {

  const author = profile.author_name

  /*
   * Authorship formatting:
   *
   * Your name + *  → accent (green/teal) + bold
   * Your name      → bold, normal author color
   *
   * Other authors are left unchanged.
   *
   * * = Corresponding author
   * † = Equal contribution
   */

  const escapedAuthor = author.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  const authorRegex = new RegExp(
    `(${escapedAuthor})(\\*?†?)`,
    'g'
  )

  return authors.replace(
    authorRegex,
    (match, name, markers) => {

      if (markers.includes('*')) {

        return `<span class="font-bold text-accent">${name}${markers}</span>`

      }

      return `<span class="font-bold text-inherit">${name}${markers}</span>`
    }
  )
}


export function trimExcerpt(excerpt: string): string {

  const excerptLength = template.excerptLength

  return excerpt.length > excerptLength
    ? `${excerpt.substring(0, excerptLength)}...`
    : excerpt
}
