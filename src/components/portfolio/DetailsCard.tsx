import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profileData } from "@/data/portfolioData";
import { Mail, Phone, MapPin, CalendarDays } from "lucide-react";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider"; // Import useDarkVeil

const DetailsCard: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil(); // Use DarkVeil hook

  const calculateAge = (birthDateString: string) => {
    const birthDate = new Date(birthDateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = React.useMemo(() => calculateAge(profileData.birthDate), [profileData.birthDate]);

  return (
    <Card className={`p-6 h-full ${isDarkVeilActive ? 'border border-primary/20 backdrop-blur-md' : ''}`}>
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">Details</CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-4">
        <div className="flex items-center space-x-3 text-muted-foreground">
          <CalendarDays className="h-5 w-5" />
          <span>{age} years old</span>
        </div>
        <div className="flex items-center space-x-3 text-muted-foreground">
          <Mail className="h-5 w-5" />
          <a href={`mailto:${profileData.email}`} className="hover:text-primary">
            {profileData.email}
          </a>
        </div>
        <div className="flex items-center space-x-3 text-muted-foreground">
          <Phone className="h-5 w-5" />
          <a href={`tel:${profileData.phone}`} className="hover:text-primary">
            {profileData.phone}
          </a>
        </div>
        <div className="flex items-center space-x-3 text-muted-foreground">
          <MapPin className="h-5 w-5" />
          <span>{profileData.location}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailsCard;