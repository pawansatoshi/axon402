import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    success: true,
    organizationId: process.env.TURNKEY_ORGANIZATION_ID,
    connected: true
  })
}
