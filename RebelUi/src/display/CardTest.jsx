import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/Cards'; // Adjust the import path if needed

const CardTest = () => (
  <div className="flex flex-wrap justify-center gap-6 p-6">
    {/* Default Card without hover effect */}
    <Card className="w-80" hover={false}>
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
        <CardDescription>This card does not have a hover effect.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card is styled with default colors and does not include hover effects.</p>
      </CardContent>
      <CardFooter>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Action
        </button>
      </CardFooter>
    </Card>

    {/* Card with hover effect */}
    <Card className="w-80" hover={true}>
      <CardHeader>
        <CardTitle>Hover Card</CardTitle>
        <CardDescription>This card features a hover effect.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Hovering over this card will apply a scaling effect and increase the shadow.</p>
      </CardContent>
      <CardFooter>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Learn More
        </button>
      </CardFooter>
    </Card>

    {/* Another Card with hover effect */}
    <Card className="w-80" hover={true}>
      <CardHeader>
        <CardTitle>Another Hover Card</CardTitle>
        <CardDescription>Different content but with the same hover effect.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card also has a hover effect applied, similar to the one above.</p>
      </CardContent>
      <CardFooter>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Warning
        </button>
      </CardFooter>
    </Card>
  </div>
);

export default CardTest;
