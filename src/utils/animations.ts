// Magnetic button effect
export const handleMagneticMouseMove = (
  e: React.MouseEvent<HTMLButtonElement>,
  strength: number = 40
) => {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const buttonX = rect.left + rect.width / 2;
  const buttonY = rect.top + rect.height / 2;
  const deltaX = e.clientX - buttonX;
  const deltaY = e.clientY - buttonY;

  button.style.transform = `translate(${deltaX / strength}px, ${
    deltaY / strength
  }px)`;
};

export const handleMagneticMouseLeave = (
  e: React.MouseEvent<HTMLButtonElement>
) => {
  e.currentTarget.style.transform = "translate(0, 0)";
};

// Text scramble animation
export class TextScramble {
  el: HTMLElement;
  chars: string;
  queue: number;
  frameRequest: number | null;
  frame: number;
  resolvePromise: (() => void) | null;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.queue = 0;
    this.frameRequest = null;
    this.frame = 0;
    this.resolvePromise = null;
  }

  setText(newText: string, maxChars: number = 30): Promise<void> {
    // Limit text length if it's too long
    if (newText.length > maxChars) {
      newText = newText.substring(0, maxChars);
    }

    // Clear any existing animation
    if (this.frameRequest) {
      cancelAnimationFrame(this.frameRequest);
      this.frameRequest = null;
    }

    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);

    this.queue = 0;
    this.frame = 0;

    // Clear element text first to ensure clean animation
    this.el.innerText = "";

    return new Promise<void>((resolve) => {
      this.resolvePromise = resolve;

      // Reset the element to ensure proper rendering
      this.el.style.visibility = "visible";

      const update = () => {
        let output = "";
        let complete = 0;

        for (let i = 0; i < length; i++) {
          if (i >= newText.length) {
            complete++;
            continue;
          }

          const char = newText[i];
          const doneChance = Math.random() * 100;
          const isDone = this.frame >= 5 + i * 2 || doneChance > 90;

          if (isDone) {
            complete++;
            output += char;
          } else {
            output += this.chars[Math.floor(Math.random() * this.chars.length)];
          }
        }

        this.el.innerText = output;

        if (complete === length) {
          if (this.resolvePromise) {
            this.resolvePromise();
            this.resolvePromise = null;
          }
        } else {
          this.frame++;
          this.frameRequest = requestAnimationFrame(update);
        }
      };

      this.frameRequest = requestAnimationFrame(update);
    });
  }
}

// Tilt effect for cards
export const initTiltEffect = (
  element: HTMLElement,
  settings = {
    max: 15, // max tilt rotation
    perspective: 1000, // transform perspective, the lower the more extreme
    scale: 1.05, // 2 = 200%, 1.5 = 150%, etc.
    speed: 500, // speed of the enter/exit transition
    easing: "cubic-bezier(.03,.98,.52,.99)", // easing for the transition
  }
) => {
  const { max, perspective, scale } = settings;

  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const tiltX = max * percentY * -1;
    const tiltY = max * percentX;

    element.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`;
  };

  const handleMouseLeave = () => {
    element.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  // Return cleanup function
  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};
