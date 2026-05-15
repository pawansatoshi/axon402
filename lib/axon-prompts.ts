export function getAxonPrompt(
  mode: string,
  input: string
) {

  if (mode === "Solve Maths") {

    return `
Solve this mathematically step-by-step:

${input}
`

  }

  if (mode === "Science Quiz") {

    return `
Answer scientifically with explanation:

${input}
`

  }

  if (mode === "Create Workflow") {

    return `
Create a professional workflow:

${input}
`

  }

  if (mode === "Analyze Image") {

    return `
Analyze this image professionally:

${input}
`

  }

  return input

}
