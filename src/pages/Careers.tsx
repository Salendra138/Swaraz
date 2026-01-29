import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import careersBanner from '@/assets/careers-banner.jpg';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState, useRef } from 'react';
const jobOpenings = [
  {
    title: 'Area Sales Manager/Executive',
    location: 'Hyderabad/Nizamabad',
    experience: '6-8 Years of Experience in General Trade',
  },
  {
    title: 'Sales Officers',
    location: 'Telangana, Hyderabad, Karnataka, Andhra Pradesh',
    experience: '0-1 years of experience in FMCG General Trade',
  },
  {
    title: 'Business Operations/Project Management',
    location: 'Work @Banjara Hills, Hyderabad',
    experience: '10-12 years experience in Statutory Liaisoning, Business Operations, Project Execution & Data management. Advanced MS Excel must',
  },
  {
    title: 'Operator @Factory (Shadnagar)',
    location: 'Shadnagar',
    experience: 'ITI Refrigeration/Electrical/Mechanical Completed or discontinued with 3-5 years experience',
  },
  {
    title: 'Assistant Manager - Quality (Shadnagar, Telangana)',
    location: 'Shadnagar, Telangana',
    experience: '6-8 years of experience in Blended Spices. Needs procedure knowledge on Volatile oil extraction & equipment, Colour value reading & machines and Muffel furnace and its operations',
  },
  {
    title: 'Microbiologist',
    location: 'Shadnagar',
    experience: '8-10 years experience',
  },
];

const Careers = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted py-3">
        <div className="swaraz-container">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Careers</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px]">
        <img
          src={careersBanner}
          alt="Join Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Content */}
      <section className="swaraz-section">
        <div className="swaraz-container">
          {/* <p className="text-center text-muted-foreground mb-4">
            Get new updates and stay connected.
          </p> */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
            Careers
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Learn more about job and career opportunities at Our Store.{' '}
            <span className="text-primary">Search our current openings</span> today to find the best fit for you and your career goals.
          </p>

          {/* Job Listings */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-secondary mb-3">{job.title}</h3>
                <p className="text-muted-foreground text-sm">{job.location}</p>
                <p className="text-muted-foreground text-sm mt-2">{job.experience}</p>
              </div>
            ))}
          </div> */}

          {/* Application Form */}
          <div className="max-w-2xl mx-auto mt-16 bg-card border border-border rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-center mb-6">Apply Now</h2>
            <form className="space-y-4">
              <div>
                <Input placeholder="Name" className="bg-background" />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="bg-background" />
              </div>
              <div className="flex gap-2">
                <div className="w-24 border border-input rounded-md flex items-center justify-center bg-background px-3">
                  <img
                    src="https://flagcdn.com/w40/in.png"
                    alt="India"
                    className="w-6 h-auto"
                  />
                  <span className="ml-2 text-sm text-muted-foreground">▼</span>
                </div>
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">+91</span>
                  <Input type="tel" placeholder="Phone" className="pl-12 bg-background" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Position</label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobOpenings.map((job, index) => (
                      <SelectItem key={index} value={job.title}>
                        {job.title}
                      </SelectItem>
                    ))}
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Input placeholder="Qualification" className="bg-background" />
              </div>

              <div>
                <Textarea placeholder="Message" className="bg-background min-h-[100px]" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Upload Your Resume</label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 flex flex-col items-center justify-center bg-muted/50 cursor-pointer hover:bg-muted/70 transition-colors" onClick={handleButtonClick}>
                  <Button
                    type="button"
                    className="mb-2 bg-[#facc15] text-black hover:bg-[#eab308]"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleButtonClick();
                    }}
                  >
                    Add file
                  </Button>
                  <input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                  {selectedFile && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Selected: {selectedFile.name}
                    </p>
                  )}
                </div>
              </div>

              <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white py-6 text-lg">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
