// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let num = Math.random() * (5 - 1) + 1
  res.status(200).json({ name: `ahahhah ${num}` })
}
