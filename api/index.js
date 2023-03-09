export default function handler(_, res) {
  res.status(200).json({
    first: "Orwa",
    last: "Diraneyya",
    avatar:
      "https://pbs.twimg.com/profile_images/1578722090194173953/lkDUvNAP_400x400.jpg",
    twitter: "@ODiraneyya",
    notes: "The holiday is coming ⛱️🏖️",
  });
}
