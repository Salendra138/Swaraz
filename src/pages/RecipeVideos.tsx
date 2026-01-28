import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const videos = [
    {
        id: 1,
        title: "Swaraz Savoury Recipe",
        url: "https://www.youtube.com/embed/spOvdTflJ5g",
    },
    {
        id: 2,
        title: "Swaraz Savoury Recipe",
        url: "https://www.youtube.com/embed/spOvdTflJ5g",
    },
    {
        id: 3,
        title: "Swaraz Savoury Recipe",
        url: "https://www.youtube.com/embed/spOvdTflJ5g",
    },
    {
        id: 4,
        title: "Swaraz Savoury Recipe",
        url: "https://www.youtube.com/embed/spOvdTflJ5g",
    },
    {
        id: 5,
        title: "Dal Tadka | UGC | Traditional Recipe",
        url: "https://www.youtube.com/embed/spOvdTflJ5g",
    },
    {
        id: 6,
        title: "Karele ki sabji | UGC | Traditional Recipe",
        url: "https://www.youtube.com/embed/spOvdTflJ5g",
    },
];

const RecipeVideos = () => {
    return (
        <Layout>
            {/* Breadcrumb */}
            <div className="bg-[#f3f4f6] py-3">
                <div className="swaraz-container">
                    <div className="flex items-center gap-2 text-sm text-[#666]">
                        <Link to="/" className="hover:text-primary">Home</Link>
                        <span>/</span>
                        <span className="text-[#333]">Recipe Videos</span>
                    </div>
                </div>
            </div>

            <div className="swaraz-container py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video) => (
                        <div key={video.id} className="bg-black aspect-video rounded-md overflow-hidden relative group">
                            <iframe
                                width="100%"
                                height="100%"
                                src={video.url}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                            <div className="absolute top-0 left-0 p-4 text-white font-medium bg-gradient-to-b from-black/70 to-transparent w-full opacity-100 transition-opacity">
                                {video.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default RecipeVideos;
