import { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { MapPin, School, Search } from "lucide-react";
import { Input } from "../components/ui/input"
import Navigation from "../components/Navigation";

interface School {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  email_id: string;
  image: string;
}

// Mock data for demonstration
const mockSchools: School[] = [
  {
    id: 1,
    name: "Sunrise Elementary School",
    address: "123 Oak Street",
    city: "Springfield",
    state: "CA",
    contact: "5551234567",
    email_id: "info@sunriseelem.edu",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Washington High School",
    address: "456 Maple Avenue",
    city: "Riverside",
    state: "CA",
    contact: "5557891234",
    email_id: "admin@washingtonhs.edu",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Jefferson Middle School",
    address: "789 Pine Road",
    city: "Madison",
    state: "WI",
    contact: "5555678901",
    email_id: "contact@jeffersonms.edu",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Lincoln Academy",
    address: "321 Cedar Lane",
    city: "Austin",
    state: "TX",
    contact: "5553456789",
    email_id: "info@lincolnacademy.edu",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Roosevelt Charter School",
    address: "654 Birch Drive",
    city: "Denver",
    state: "CO",
    contact: "5552345678",
    email_id: "office@rooseveltcharter.edu",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Kennedy International School",
    address: "987 Elm Street",
    city: "Miami",
    state: "FL",
    contact: "5556789012",
    email_id: "admissions@kennedyintl.edu",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
  }
];

const ShowSchools = () => {
  const [schools, setSchools] = useState<School[]>([]);
  const [filteredSchools, setFilteredSchools] = useState<School[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchSchools = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSchools(mockSchools);
      setFilteredSchools(mockSchools);
      setIsLoading(false);
    };

    fetchSchools();
  }, []);

  useEffect(() => {
    const filtered = schools.filter(school =>
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.state.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSchools(filtered);
  }, [searchTerm, schools]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">School Directory</h1>
          <p className="text-muted-foreground">Discover schools in your area</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search schools by name, city, or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11 accent-border focus:accent-border"
            />
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="card-themed overflow-hidden animate-pulse">
                <div className="h-48 bg-muted"></div>
                <CardContent className="p-4">
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-3 bg-muted rounded mb-2"></div>
                  <div className="h-3 bg-muted rounded w-2/3"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <>
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {filteredSchools.length} of {schools.length} schools
              </p>
            </div>

            {/* Schools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchools.map((school) => (
                <Card key={school.id} className="card-themed overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={school.image}
                      alt={school.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 text-foreground accent-border">
                        <School className="h-3 w-3 mr-1" />
                        School
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-foreground line-clamp-1">
                      {school.name}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 accent-text" />
                        <div>
                          <p className="line-clamp-1">{school.address}</p>
                          <p className="font-medium text-foreground">
                            {school.city}, {school.state}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredSchools.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <School className="h-12 w-12 accent-text mx-auto mb-4 animate-float" />
                <h3 className="text-lg font-medium text-foreground mb-2">No schools found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or browse all schools.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ShowSchools;