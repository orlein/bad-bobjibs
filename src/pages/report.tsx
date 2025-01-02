import { Camera, Upload } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import BottomNav from '../components/ui/BottomNav';

export default function Report() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Share Your Experience</h1>

        <form className="space-y-4">
          <div>
            <Input placeholder="Restaurant name" />
          </div>

          <div>
            <Input type="date" placeholder="Date of visit" />
          </div>

          <div>
            <Textarea
              placeholder="What happened? Share your experience to help others..."
              className="min-h-[150px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <Camera className="mr-2 h-4 w-4" />
              Take Photo
            </Button>
            <Button variant="outline" className="w-full">
              <Upload className="mr-2 h-4 w-4" />
              Upload Photo
            </Button>
          </div>

          <Button className="w-full">Share Experience</Button>
        </form>
      </main>
      <BottomNav />
    </div>
  );
}
