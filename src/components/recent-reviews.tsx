import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card';

export default function RecentReviews() {
  return (
    <>
      <h3 className="text-xl font-semibold mt-8 mb-4">Your Recent Reviews</h3>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Yucky Burgers</CardTitle>
            <CardDescription>Reviewed on: June 15, 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              "I've had better meals from a vending machine. The burgers were so
              greasy, I could see my reflection in them!"
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Stale Sushi</CardTitle>
            <CardDescription>Reviewed on: May 30, 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              "I'm pretty sure the 'fresh catch of the day' was caught last
              year. My stomach is still doing backflips!"
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
