import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { UserCircle, Edit2Icon } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <UserCircle className="w-12 h-12" />
            <div>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>Joined: January 2023</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" value="johndoe123" readOnly />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value="john.doe@example.com"
              readOnly
            />
          </div>
          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about your bad dining experiences..."
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>
            <Edit2Icon className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </CardFooter>
      </Card>

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
    </div>
  );
}
