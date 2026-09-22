import PageBanner from "@/app/common/PageBanner";
import { site } from "@/data";
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
  const post = site.blog.posts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get recent posts (excluding current one)
  const recentPosts = site.blog.posts.filter(p => p.slug !== slug).slice(0, 4);

  return (
    <main className="bg-[#fbfbfb] min-h-screen font-sans pb-24">
      <PageBanner 
        title={site.pages['blog-detail'].bannerTitle} 
        breadcrumbs={[
          { label: site.pageBanner.homeLabel, href: "/" },
          { label: site.pages.blog.bannerTitle, href: "/blog" },
          { label: post.title }
        ]} 
      />

      <div className="site-container mt-8 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* LEFT MAIN CONTENT */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex-grow">
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
                {post.description}{site.blogDetail.shared.introExtra}
              </p>

              {/* Meta info row */}
              <div className="flex flex-wrap items-center gap-6 text-base font-medium text-gray-500 mb-8 border-b border-gray-100 pb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>{post.monthYear.replace(/(\d{4})/, '$1').replace(/([A-Z]+)/, (m) => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase())} {post.date}, 2025</span>
                </div>
                <div className="w-[1px] h-4 bg-red-200"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{site.blogDetail.shared.readTime}</span>
                </div>
                <div className="w-[1px] h-4 bg-red-200"></div>
                <button className="flex items-center gap-2 hover:text-[#cc1616] transition-colors">
                  <Bookmark className="w-4 h-4 text-gray-400" />
                  <span>{site.blogDetail.shared.saveLabel}</span>
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
                  {site.blogDetail.shared.bodyIntro}
                </p>

                <div className="space-y-8">
                  {site.blogDetail.shared.sections.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-red-100 pb-2 inline-block">{section.title}</h3>
                      <p className="text-base leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Recent Posts */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-extrabold text-gray-900 mb-2">{site.blogDetail.shared.recentPostsTitle}</h3>
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
                      <h4 className="font-bold text-base text-gray-900 leading-snug group-hover:text-[#cc1616] transition-colors line-clamp-2 mb-2">
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
              <h4 className="text-xl font-bold text-gray-900 mb-3">{site.blogDetail.shared.cta.title}</h4>
              <p className="text-base text-gray-500 mb-6 leading-relaxed">
                {site.blogDetail.shared.cta.description}
              </p>
              <Link href={site.blogDetail.shared.cta.href}>
                <button className="w-full bg-[#cc1616] hover:bg-[#a51212] text-white font-bold py-3.5 px-4 rounded-xl transition shadow-md flex items-center justify-center gap-2 text-base">
                  {site.blogDetail.shared.cta.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex-grow">
              <h3 className="text-lg font-extrabold text-gray-900 mb-2">{site.blogDetail.shared.categoriesTitle}</h3>
              <div className="w-8 h-[2px] bg-[#cc1616] mb-6"></div>
              
              <div className="space-y-2">
                {Array.from(new Set(site.blog.posts.map(p => p.category))).map((catName, idx) => {
                  const latestPost = site.blog.posts.find(p => p.category === catName);
                  const count = site.blog.posts.filter(p => p.category === catName).length;
                  const catNameLower = catName.toLowerCase();
                  
                  // Pick an icon based on category name
                  let CategoryIcon = Settings;
                  if (catNameLower.includes('repair')) CategoryIcon = Wrench;
                  else if (catNameLower.includes('tech')) CategoryIcon = Smartphone;
                  else if (catNameLower.includes('battery')) CategoryIcon = BatteryCharging;
                  
                  return (
                  <Link 
                    key={idx} 
                    href={latestPost ? `/blog/${latestPost.slug}` : "/blog"}
                    className="flex items-center justify-between p-3 rounded-xl transition-all bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-[#cc1616] group"
                  >
                    <div className="flex items-center gap-3">
                      <CategoryIcon className="w-4 h-4 text-red-400 group-hover:text-[#cc1616]" />
                      <span className="font-bold text-sm capitalize">{catName.toLowerCase()}</span>
                    </div>
                    <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-gray-500 shadow-sm border border-gray-100 group-hover:text-[#cc1616] group-hover:border-red-100">
                      {count.toString().padStart(2, '0')}
                    </span>
                  </Link>
                  );
                })}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
