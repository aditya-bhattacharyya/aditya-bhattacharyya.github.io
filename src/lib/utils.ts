import { profile } from '../settings'
import { template } from '../settings'

export function highlightAuthor(authors: string): string {

  const author = profile.author_name

  /*
   * Highlight only the user's own name.
   *
   * Publication markers such as:
   *   *  = corresponding author
   *   †  = equal contribution
   *
   * remain outside the highlighted name.
   */

  const escapedAuthor = author.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  const authorRegex = new RegExp(
    `(${escapedAuthor})(?=\\*|†|$)`,
    'g'
  )

  return authors.replace(
    authorRegex,
    `<span class='font-medium underline'>$1</span>`
  )
}


export function trimExcerpt(excerpt: string): string {

  const excerptLength = template.excerptLength

  return excerpt.length > excerptLength
    ? `${excerpt.substring(0, excerptLength)}...`
    : excerpt
}
