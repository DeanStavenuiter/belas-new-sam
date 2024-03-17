interface FormData {
  naam: string;
  email: string;
  telefoonnummer: string;
  onderwerp: string;
  opmerking: string;
}

export async function POST(request: Request) {
  const FormData: FormData = await request.json();

  console.log('FormData', FormData);
  try {
  } catch (error) {
    console.log(error);

    return Response.json({
      status: 500,
      message: 'Oeps, er is iets misgegaan',
    });
  }

  return Response.json({
    message: 'Uw aanvraag is succesvol verstuurd!',
    status: 200,
  });
}
