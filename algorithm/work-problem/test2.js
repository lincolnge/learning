export async function ajx(ctx) {
  const t = new Date();
  const res = await request();
  const endT = newDate();
  ctx.time = endT - t;
  return res;
}
