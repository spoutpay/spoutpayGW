import { NextResponse } from "next/server";
import fs from "fs";
export async function POST(req, response) {
  const data = await req.formData();
  for (const entry of Object.entries(data)) {
    const [filename, value] = entry;
    const blob = value;
    const buffer = await blob.arrayBuffer();
    fs.writeFileSync(`public/${filename}`, Buffer.from(buffer));
  }

  return NextResponse.json({ success: true });
}
