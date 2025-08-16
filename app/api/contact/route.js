export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    console.log('📩 New Contact Message:', body)

    // Here you could save to a database or send an email
    return new Response(
      JSON.stringify({ success: true, msg: 'Message received' }),
      { status: 200 }
    )
  } catch (error) {
    return new Response(JSON.stringify({ success: false, msg: 'Error occurred' }), {
      status: 500,
    })
  }
}
