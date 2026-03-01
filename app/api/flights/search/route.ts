import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  const origin = searchParams.get('origin');
  const destination = searchParams.get('destination');
  const departDate = searchParams.get('depart_date');
  const returnDate = searchParams.get('return_date');
  const currency = searchParams.get('currency') || 'USD';

  if (!origin || !destination || !departDate) {
    return NextResponse.json(
      { error: 'Missing required parameters: origin, destination, depart_date' },
      { status: 400 }
    );
  }

  try {
    const token = 'ff4f6a461d6ae4eaf9fd6874ac44c8e9';
    const apiUrl = new URL('https://api.travelpayouts.com/v1/prices/cheap');
    
    // Add query parameters
    apiUrl.searchParams.append('origin', origin.toUpperCase());
    apiUrl.searchParams.append('destination', destination.toUpperCase());
    apiUrl.searchParams.append('depart_date', departDate);
    apiUrl.searchParams.append('token', token);
    apiUrl.searchParams.append('currency', currency);
    
    if (returnDate) {
      apiUrl.searchParams.append('return_date', returnDate);
    }

    console.log('Making API call to:', apiUrl.toString());

    const response = await fetch(apiUrl.toString(), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate',
        'X-Access-Token': token
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', errorText);
      return NextResponse.json(
        { error: `API Error: ${response.status} - ${errorText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('API Response:', data);

    return NextResponse.json(data);

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
