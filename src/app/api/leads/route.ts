import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, interest, message } = body;

    if (!name || !contact) {
      return NextResponse.json(
        { error: 'Nama dan kontak (WA/Email) wajib diisi ya!' },
        { status: 400 }
      );
    }

    // Mapping penerima leads
    let targetPic = 'Seluruh Tim Karsa';
    if (interest === 'bayu') targetPic = 'Bayu (Visual & Brand)';
    if (interest === 'fadil') targetPic = 'Fadil (Spatial & Architecture)';
    if (interest === 'igo') targetPic = 'Igo (Web & Tech)';

    const leadPayload = {
      receivedAt: new Date().toISOString(),
      clientName: name,
      contact,
      interest,
      targetPic,
      message: message || '(Tidak ada pesan tambahan)',
    };

    console.log('🔔 [NEW LEAD RECEIVED]:', leadPayload);

    // Kalo lu nanti punya DISCORD_WEBHOOK_URL atau TELEGRAM_BOT_TOKEN di .env.local,
    // webhook bisa langsung ditembak di sini:
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🚀 **LEAD BARU DI KARSA COLLECTIVE!**\n**Nama:** ${name}\n**Kontak:** ${contact}\n**Kebutuhan:** ${targetPic}\n**Pesan:** ${message || '-'}\n*Waktu: ${new Date().toLocaleString('id-ID')}*`,
          }),
        });
      } catch (webhookErr) {
        console.error('Failed to dispatch webhook:', webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Terima kasih ${name}! Pesan lu udah diteruskan ke ${targetPic}. Tim kami bakal segera hubungin lu.`,
      lead: leadPayload,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown server error';
    return NextResponse.json(
      { error: 'Terjadi kesalahan sistem', detail: errorMessage },
      { status: 500 }
    );
  }
}
