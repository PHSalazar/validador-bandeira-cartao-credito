export function getCreditCardBrand(cardNumber) {
  const cardNumberStr = cardNumber.toString();

  const cardBrands = [
    {
      title: "Visa",
      regex: /^4\d{12,18}$/,
      icon: "visa.png",
    },
    {
      title: "MasterCard",
      regex: /^5[1-5]\d{14}$|^2(2[2-9]|[3-6][0-9]|7[01]|720)\d{12}$/,
      icon: "mastercard.png",
    },
    {
      title: "Elo",
      regex:
        /^(4011|4312|4389|5041|5067|5090|6277|6362|6504|6505|6509|6516|6550)\d{12,15}$/,
      icon: "default-card-icon.png",
    },
    {
      title: "American Express",
      regex: /^3[47]\d{13}$/,
      icon: "american-express.png",
    },
    {
      title: "Discover",
      regex: /^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/,
      icon: "default-card-icon.png",
    },
    {
      title: "Hipercard",
      regex: /^6062\d{12,15}$/,
      icon: "default-card-icon.png",
    },
  ];

  for (const brand of cardBrands) {
    if (brand.regex.test(cardNumberStr)) {
      return { success: true, title: brand.title, icon: brand.icon };
    }
  }

  return { success: false, title: "Unknown", icon: "unknown-icon.png" };
}
