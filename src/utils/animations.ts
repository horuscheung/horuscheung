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
  private el: HTMLElement;
  private chars: string;
  private queue: {
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  }[];
  private frame: number;
  private frameRequest: number;
  private resolve: () => void;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.queue = [];
    this.frame = 0;
    this.frameRequest = 0;
    this.resolve = () => {};
    this.update = this.update.bind(this);
  }

  setText(newText: string) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="scramble-char">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
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
