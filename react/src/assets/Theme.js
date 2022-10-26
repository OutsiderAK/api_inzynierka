
export const Colors = {
  Brand: {
    Mint:'#A5EAEC',
    Blue:'#99BFF5',
    Button:'#6B10B1',
    Text:'#010030',
    White:'#FFFFFF',
    Rank: '#BB67FF',
  },
};

export const TextStyles={
  H1: {
    FontSize: "48px",
    LineHeight: "60px",
    LetterSpacing: "0",
    FontWeight: 900,
  },
  H2: {
    FontSize: "40px",
    LineHeight: "52px",
    LetterSpacing: "0",
    FontWeight: 900,
  },
  H3: {
    FontSize: "20px",
    LineHeight: "24px",
    LetterSpacing: "0",
    FontWeight: 600,
  },
  ButtonT: {
    FontSize: "16px",
    LineHeight: "20px",
    LetterSpacing: "0",
    FontWeight: 800,
  },
  S1: {
    FontSize: "16px",
    LineHeight: "20px",
    LetterSpacing: "0",
    FontWeight: 600,
  },
  S2: {
    FontSize: "16px",
    LineHeight: "20px",
    LetterSpacing: "0",
    FontWeight: 400,
  },
  Bundler: function (attr) {
    return `
      font-size: ${attr.FontSize};
      font-weight:  ${attr.FontWeight};
      line-height: ${attr.LineHeight};
      letter-spacing: ${attr.LetterSpacing};
      `;
  },
};

export const Shadows = {
  button: "0px 4px 20px #C4C4C4",
};