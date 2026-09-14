import { profile } from '../settings'
import { template } from '../settings'

export function highlightAuthor(authors: string): string {

  const authorName = profile.author_name

  // Highlight Aditya's name.
  // If an asterisk follows his name, treat it as corresponding-author status.
  const escapedAuthor = authorName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  const authorRegex = new RegExp(`(${escapedAuthor})(\\*)?`, 'g')

  return authors.replace(authorRegex, (_, name, star) => {

    if (star) {
      return `<strong class="font-bold text-primary">${name}<sup class="ml-0.5 text-xs font-bold">*</sup></strong>`
    }

    return `<strong class="font-semibold">${name}</strong>`
  })
}

export function trimExcerpt(excerpt: string): string {

  const excerptLength = template.excerptLength

  return excerpt.length > excerptLength
    ? `${excerpt.substring(0, excerptLength)}...`
    : excerpt
}
