import PageBanner from "@/app/common/PageBanner";
import data from "@/data/data.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  Bookmark, 
  Wrench, 
  ArrowRight,
  Smartphone,
  BatteryCharging,
  Settings,
  MonitorSmartphone
} from "lucide-react";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  
  // Find the requested post
  const post = data.blog.posts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get recent posts (excluding current one)
  const recentPosts = data.blog.posts.filter(p => p.slug !== slug).slice(0, 4);

  return (
    <main className="bg-[#fbfbfb] min-h-screen font-sans pb-24">
      <PageBanner 
        title="Blogs Details" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs Details" }
        ]} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* LEFT MAIN CONTENT */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-red-50 text-[#cc1616] border border-red-100 font-bold text-[10px] tracking-wider uppercase rounded mb-4">
                {post.category}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Intro summary */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {post.description} A few smart habits can significantly extend your phone's battery life and keep it running smoothly throughout the day.
              </p>

              {/* Meta info row */}
              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-500 mb-8 border-b border-gray-100 pb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>{post.monthYear.replace(/(\d{4})/, '$1').replace(/([A-Z]+)/, (m) => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase())} {post.date}, 2025</span>
                </div>
                <div className="w-[1px] h-4 bg-red-200"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>6 min read</span>
                </div>
                <div className="w-[1px] h-4 bg-red-200"></div>
                <button className="flex items-center gap-2 hover:text-[#cc1616] transition-colors">
                  <Bookmark className="w-4 h-4 text-gray-400" />
                  <span>Save Article</span>
                </button>
              </div>

              {/* Main Image */}
              <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden mb-10 bg-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-8">
                  Smartphones have become an essential part of our daily lives. But there's nothing more frustrating than running out of battery when you need your phone the most. The good news is, with the right habits and settings, you can improve your battery performance and make it last much longer.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-red-100 pb-2 inline-block">1. Lower Your Screen Brightness</h3>
                    <p className="text-sm leading-relaxed">
                      The display is one of the biggest battery drainers. Reducing screen brightness or turning on auto-brightness can make a noticeable difference in battery life.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-red-100 pb-2 inline-block">2. Turn On Battery Saver Mode</h3>
                    <p className="text-sm leading-relaxed">
                      Most smartphones come with a Battery Saver mode that limits background activity, reduces performance, and helps your phone last longer—especially when your battery is low.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-red-100 pb-2 inline-block">3. Close Unused Background Apps</h3>
                    <p className="text-sm leading-relaxed">
                      Apps running in the background consume battery even when you're not using them. Close apps you're not using and restrict unnecessary background activity from settings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-red-100 pb-2 inline-block">4. Avoid Extreme Temperatures</h3>
                    <p className="text-sm leading-relaxed">
                      Heat is a battery's worst enemy. Avoid using your phone in very hot conditions or leaving it in direct sunlight for long periods.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-red-100 pb-2 inline-block">5. Use the Right Charger</h3>
                    <p className="text-sm leading-relaxed">
                      Always use original or certified chargers. Cheap or incompatible chargers can not only damage your battery but also reduce its overall lifespan.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Recent Posts */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-extrabold text-gray-900 mb-2">Recent Posts</h3>
              <div className="w-8 h-[2px] bg-[#cc1616] mb-6"></div>
              
              <div className="space-y-6">
                {recentPosts.map((rp) => (
                  <Link href={`/blog/${rp.slug}`} key={rp.id} className="flex gap-4 group cursor-pointer">
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                      <img 
                        src={rp.image} 
                        alt={rp.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-[#cc1616] transition-colors line-clamp-2 mb-2">
                        {rp.title}
                      </h4>
                      <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                        {rp.monthYear.replace(/(\d{4})/, '$1').replace(/([A-Z]+)/, (m) => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase())} {rp.date}, 2025
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Need a Repair CTA */}
            <div className="bg-[#fff5f5] rounded-2xl p-8 border border-red-50 text-center shadow-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#cc1616] shadow-sm">
                <Wrench className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Need a Repair?</h4>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                We're here to help you with fast, reliable and affordable repairs.
              </p>
              <Link href="/contact">
                <button className="w-full bg-[#cc1616] hover:bg-[#a51212] text-white font-bold py-3.5 px-4 rounded-xl transition shadow-md flex items-center justify-center gap-2 text-sm">
                  Book a Repair
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-extrabold text-gray-900 mb-2">Categories</h3>
              <div className="w-8 h-[2px] bg-[#cc1616] mb-6"></div>
              
              <div className="space-y-2">
                {[
                  { name: "Smartphone Tips", count: "12", icon: Smartphone },
                  { name: "Device Repair", count: "10", icon: Wrench },
                  { name: "Battery & Charging", count: "08", icon: BatteryCharging },
                  { name: "Maintenance", count: "07", icon: Settings },
                  { name: "Tech News", count: "06", icon: MonitorSmartphone },
                ].map((cat, idx) => (
                  <Link 
                    key={idx} 
                    href="/blog"
                    className="flex items-center justify-between p-3 rounded-xl transition-all bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-[#cc1616] group"
                  >
                    <div className="flex items-center gap-3">
                      <cat.icon className="w-4 h-4 text-red-400 group-hover:text-[#cc1616]" />
                      <span className="font-bold text-xs">{cat.name}</span>
                    </div>
                    <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-gray-500 shadow-sm border border-gray-100 group-hover:text-[#cc1616] group-hover:border-red-100">
                      {cat.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
