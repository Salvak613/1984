export interface ScrambleOptions {
  probability?: number;
  glitches?: string;
  blank?: string;
  duration?: number;
  delay?: number;
}

export function scramble(
  element: HTMLElement,
  text: string,
  options: ScrambleOptions = {}
): void {
  const defaults: Required<ScrambleOptions> = {
    probability: 0.2,
    glitches: "-|/\\",
    blank: "",
    duration: text.length * 40,
    delay: 0.0,
  };

  const settings: Required<ScrambleOptions> = { ...defaults, ...options };

  const shuffle = (): number => (Math.random() < 0.5 ? 1 : -1);
  const wrap = (text: string, classes: string): string =>
    `<span class="${classes}">${text}</span>`;

  const glitchCharacters: string[] = settings.glitches.split("");
  const glitchLength: number = glitchCharacters.length;
  const glitchProbability: number = settings.probability;
  const glitches: string[] = glitchCharacters.map((letter) =>
    wrap(letter, "glitch")
  );

  const ghostText: string = element.textContent || "";
  const ghostCharacters: string[] = ghostText.split("");
  const ghosts: string[] = ghostCharacters.map((letter) =>
    wrap(letter, "ghost")
  );

  const textCharacters: string[] = text.split("");
  const textLength: number = textCharacters.length;

  const order: number[] = Array.from({ length: textLength }, (_, i) => i).sort(
    shuffle
  );
  const output: string[] = [];

  for (let i = 0; i < textLength; i++) {
    const glitchIndex: number = Math.floor(Math.random() * (glitchLength - 1));
    const glitchCharacter: string = glitches[glitchIndex];
    const ghostCharacter: string = ghosts[i] || settings.blank;
    const addGlitch: boolean = Math.random() < glitchProbability;
    const character: string = addGlitch ? glitchCharacter : ghostCharacter;
    output.push(character);
  }

  let progress = 0;
  const animateScramble = (): void => {
    progress += 1 / (settings.duration / 16); // ~60fps

    if (progress >= 1) {
      element.innerHTML = text;
      return;
    }

    const currentProgress: number = Math.floor(progress * (textLength - 1));
    for (let i = 0; i <= currentProgress; i++) {
      const index = order[i];
      if (index !== undefined && textCharacters[index] !== undefined) {
        output[index] = textCharacters[index];
      }
    }

    element.innerHTML = output.join("");
    requestAnimationFrame(animateScramble);
  };

  setTimeout(() => {
    requestAnimationFrame(animateScramble);
  }, settings.delay);
}
