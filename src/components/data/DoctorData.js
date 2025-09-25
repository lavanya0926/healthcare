const doctors = [
  // Cardiologists
  {
    id: "card001",
    name: "Dr. Aisha Verma",
    specialty: "Cardiologist",
    picture: "https://tse3.mm.bing.net/th/id/OIP.SYCQ1q44JIugY6mVJlUGVAHaE8?pid=ImgDet&w=178&h=118&c=7&dpr=1.5&o=7&rm=3",
    experience: 12,
    rating: 4.8,
    location: "Mumbai, India"
  },
  {
    id: "card002",
    name: "Dr. Felix Nunura",
    specialty: "Cardiologist",
    picture: "https://tse4.mm.bing.net/th/id/OIP.JPrps1FCQzY_f5GbtyLoIgHaEy?w=303&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    experience: 18,
    rating: 4.9,
    location: "Mandeville, Jamaica"
  },
  {
    id: "card003",
    name: "Dr. Sarah Kaplan",
    specialty: "Cardiologist",
    picture: "https://tse1.mm.bing.net/th/id/OIP.QIPrDfHKy7Py1TIXj7nLdwHaEJ?w=332&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    experience: 10,
    rating: 4.7,
    location: "Ridgewood, NJ"
  },
 
  // Dentists
  {
    id: "dent001",
    name: "Dr. Mohsen Khobyari",
    specialty: "Dentist",
    picture: "https://tse4.mm.bing.net/th/id/OIP.lkyxUEx-eeFpRpxLtIcARgHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    experience: 14,
    rating: 4.6,
    location: "Houston, TX"
  },
  {
    id: "dent002",
    name: "Dr. Brian Howell",
    specialty: "Dentist",
    picture: "https://tse3.mm.bing.net/th/id/OIP.8X1zC1AYgktbedxiw03bnQHaE8?w=202&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    experience: 9,
    rating: 4.5,
    location: "Edmond, OK"
  },
  {
    id: "dent003",
    name: "Dr. Nimmy Shailesh",
    specialty: "Dentist",
    picture: "https://tse1.mm.bing.net/th/id/OIP.QIPrDfHKy7Py1TIXj7nLdwHaEJ?w=325&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    experience: 11,
    rating: 4.7,
    location: "Dubai, UAE"
  },
 
  // Neurologists
  {
    id: "neuro001",
    name: "Dr. Olajide Benson",
    specialty: "Neurologist",
    picture: "https://tse1.mm.bing.net/th/id/OIP.vhEe2m4Hmn0C0SBx53l4yQHaE8?w=270&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    experience: 16,
    rating: 4.8,
    location: "Atlanta, GA"
  },
  {
    id: "neuro002",
    name: "Dr. Rajit Pillai",
    specialty: "Neurologist",
    picture: "https://tse2.mm.bing.net/th/id/OIP.BAQ9hkzLOtyKaCEqQCCA1wAAAA?w=276&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    experience: 13,
    rating: 4.6,
    location: "Dubai, UAE"
  },
  {
    id: "neuro003",
    name: "Dr. Megan Donnelly",
    specialty: "Neurologist",
    picture: "https://tse4.mm.bing.net/th/id/OIP.fjYINuA6SVbnnVc7aWuf3QHaE7?w=303&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    experience: 10,
    rating: 4.9,
    location: "Chicago, IL"
  },
 
  // Pediatricians
  {
    id: "ped001",
    name: "Dr. Sneha Iyer",
    specialty: "Pediatrician",
    picture: "https://tse3.mm.bing.net/th/id/OIP.Bzz5ZbQj5chM7ok25JlCcQHaE8?w=274&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    experience: 15,
    rating: 4.9,
    location: "Bangalore, India"
  },
  {
    id: "ped002",
    name: "Dr. Amanda Penny",
    specialty: "Pediatrician",
    picture: "https://tse4.mm.bing.net/th/id/OIP.wJ_SKHmbanRIlwEKifntfgHaEk?w=291&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    experience: 12,
    rating: 4.7,
    location: "New York, NY"
  },
  {
    id: "ped003",
    name: "Dr. Franson Jose",
    specialty: "Pediatrician",
    picture: "https://tse2.mm.bing.net/th/id/OIP.yAL08juXl8HbeCaxa3ocowHaE7?w=287&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    experience: 10,
    rating: 4.6,
    location: "Dubai, UAE"
  },
 
  // Orthopedics
  {
    id: "ortho001",
    name: "Dr. Morteza Farr",
    specialty: "Orthopedic Surgeon",
    picture: "https://www.bing.com/th/id/OIP.jQICZlID2JiF0rrugeAcmQHaFj?w=232&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    experience: 20,
    rating: 4.8,
    location: "San Jose, CA"
  },
  {
    id: "ortho002",
    name: "Dr. Gabriella Ode",
    specialty: "Orthopedic Surgeon",
    picture: "https://tse3.mm.bing.net/th/id/OIP.E1moTJ1QPksAxJCYLk5D4gHaE8?w=239&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    experience: 14,
    rating: 4.7,
    location: "New York, NY"
    
  },
  {
    id: "ortho003",
    name: "Dr. Bharat Jivani",
    specialty: "Orthopedic Surgeon",
    picture: "https://tse4.mm.bing.net/th/id/OIP.fjYINuA6SVbnnVc7aWuf3QHaE7?w=303&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    experience: 18,
    rating: 4.9,
    location: "Surat, India"
  },
 
  // Dermatologists
  {
    id: "derm001",
    name: "Dr. Rohan Mehta",
    specialty: "Dermatologist",
    picture: "https://tse1.mm.bing.net/th/id/OIP.2PNeqoXRvTli6WRVXkxZKwHaE8?w=293&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7", 
    experience: 8,
    rating: 4.5,
    location: "Delhi, India"
  },
  {
    id: "derm002",
    name: "Dr. Allison Larson",
    specialty: "Dermatologist",
    picture: "https://tse1.mm.bing.net/th/id/OIP.-oZNTNUR2oG_gbfiQJQifgHaE8?w=217&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    experience: 11,
    rating: 4.7,
    location: "Washington, DC"
  },
  {
    id: "derm003",
    name: "Dr. Megha Mariam George",
    specialty: "Dermatologist",
    picture: "https://tse4.mm.bing.net/th/id/OIP.QweCKhrquIBPo3tQl4EJrwHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    experience: 9,
    rating: 4.6,
    location: "Thiruvalla, India"
  }
];
 
export default doctors;