export const profile = {
  fullName: 'Dr. Aditya Bhattacharyya',
  title: 'Associate Scientific Director',
  institute: 'Biocon Bristol Myers Squibb R&D Center (BBRC), Syngene International Ltd.',
  author_name: 'Aditya Bhattacharyya', // Author name to be highlighted in papers section
  research_areas: [
    { title: 'Photoredox Catalysis', description: 'Visible-light-driven organic transformations and copper photoredox catalysis', field: 'chemistry' },
    { title: 'Heterocyclic Synthesis', description: 'Small-ring heterocycle synthesis (aziridines, azetidines, donor-acceptor cyclopropanes) for drug discovery', field: 'chemistry' },
    { title: 'Reaction Technology', description: 'Flow photochemistry, continuous flow hydrogenations, and automated flash chromatography', field: 'chemistry' }
  ]
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
  email: 'dr.aditya.bhattacharyya@gmail.com',
  linkedin: 'https://www.linkedin.com/',
  x: '',
  bluesky: '',
  github: 'https://github.com/aditya-bhattacharyya',
  gitlab: '',
  scholar: 'https://scholar.google.com/',
  inspire: '',
  arxiv: '',
  orcid: 'https://orcid.org/0000-0001-7011-2102'
}

export const template = {
  website_url: 'https://aditya-bhattacharyya.github.io', // Fixed: Updated from localhost
  menu_left: false,
  transitions: true,
  lightTheme: 'light',
  darkTheme: 'dark',
  excerptLength: 200,
  postPerPage: 5,
  base: '' // Kept blank since repository name matches <username>.github.io
}

export const seo = {
  default_title: 'Dr. Aditya Bhattacharyya | Academic & Industry Portfolio',
  default_description: 'Personal portfolio, research publications, and academic CV of Dr. Aditya Bhattacharyya.',
  default_image: '/images/astro-academia.png'
}
