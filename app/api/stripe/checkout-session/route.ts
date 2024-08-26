const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: Request) {

    try {

      const {priceId} = await req.json();

        const session = await stripe.checkout.sessions.create({
            line_items: [
              {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: priceId,
                quantity: 1,
              },
            ],
            phone_number_collection: {
              enabled: true,
            },
            mode: 'payment',
            success_url: `${req.headers.get("origin")}/?success=true`,
            cancel_url: `${req.headers.get("origin")}/?canceled=true`,
            shipping_address_collection: {
              allowed_countries: ['FR']
            }

            //automatic_tax: {enabled: true}
          });
        
        return Response.json({ sessionId: session.id }, { status: 200 });
    } catch ( err:any ) {
        console.log(err);
        return new Response(err.message, { status: err.statusCode || 500 });
    }

    // try {
    //     // Create Checkout Sessions from body params.
    //     const session = await stripe.checkout.sessions.create({
    //       line_items: [
    //         {
    //           // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
    //           price: '{{PRICE_ID}}',
    //           quantity: 1,
    //         },
    //       ],
    //       mode: 'payment',
    //       success_url: `${req.headers.origin}/?success=true`,
    //       cancel_url: `${req.headers.origin}/?canceled=true`,
    //     });
    //     res.redirect(303, session.url);
    //   } catch (err) {
    //     res.status(err.statusCode || 500).json(err.message);
    //   }
    // } else {
    //   res.setHeader('Allow', 'POST');
    //   res.status(405).end('Method Not Allowed');
    // }

    // return Response.json({ message: 'Hello World' });
}
