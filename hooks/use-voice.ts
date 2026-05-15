"use client"

export function speakText(text: string) {

  const speech =
    new SpeechSynthesisUtterance(text)

  speech.rate = 1

  speech.pitch = 1

  speech.volume = 1

  window.speechSynthesis.cancel()

  window.speechSynthesis.speak(speech)

}
