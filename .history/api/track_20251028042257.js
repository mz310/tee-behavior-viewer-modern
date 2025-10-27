// // api/track.js
// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     // зөвхөн POST хүлээн авна
//     return res.status(405).json({ ok: false, error: 'Method not allowed' });
//   }

//   try {
//     // биеэс payload уншина
//     const body = req.body;

//     // энд чи payload-аа яах вэ гэдгээ шийднэ:
//     // 1. Одоохондоо зүгээр л лог болгон буцааж өгье
//     // 2. Дараа нь чи энэ хэсэгт ямар нэг logging service рүү явуулж болно
//     console.log('analytics event from client:', body);

//     // client-д буцаах хариу
//     return res.status(200).json({ ok: true });
//   } catch (err) {
//     console.error('track error:', err);
//     return res.status(500).json({ ok: false, error: 'Internal error' });
//   }
// }
