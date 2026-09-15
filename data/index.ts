import siteDataRaw from './data.json';

export type SectionProps<T = unknown> = {
  data?: T;
  className?: string;
};

export const siteData = siteDataRaw.categories.FixBolt.sections;

// We export a flattened 
export const site = {
  topbar: siteData.Topbar.variants.FixBoltTopbar1,
  header: siteData.Header.variants.FixBoltHeader1,
  hero: siteData.Hero.variants.FixBoltHero1,
  about: siteData.About.variants.FixBoltAbout1,
  counters: siteData.Counters.variants.FixBoltCounters1,
  services: siteData.Services.variants.FixBoltServices1,
  serviceDetail: siteData.ServiceDetail.variants.FixBoltServiceDetail1,
  workProcess: siteData.WorkProcess.variants.FixBoltWorkProcess1,
  whyChooseUs: siteData.WhyChooseUs.variants.FixBoltWhyChooseUs1,
  brands: siteData.Brands.variants.FixBoltBrands1,
  brandsSection: siteData.BrandsSection.variants.FixBoltBrandsSection1,
  team: siteData.Team.variants.FixBoltTeam1,
  teamDetail: siteData.TeamDetail.variants.FixBoltTeamDetail1,
  testimonial: siteData.Testimonial.variants.FixBoltTestimonial1,
  testimonialsGrid: siteData.TestimonialsGrid.variants.FixBoltTestimonialsGrid1,
  blog: siteData.Blog.variants.FixBoltBlog1,
  blogDetail: siteData.BlogDetail.variants.FixBoltBlogDetail1,
  footer: siteData.Footer.variants.FixBoltFooter1,
  career: siteData.Career.variants.FixBoltCareer1,
  jobDetail: siteData.JobDetail.variants.FixBoltJobDetail1,
  refundPolicy: siteData.RefundPolicy.variants.FixBoltRefundPolicy1,
  notFound: siteData.NotFound.variants.FixBoltNotFound1,
  sitemap: siteData.Sitemap.variants.FixBoltSitemap1,
  gallery: siteData.Gallery.variants.FixBoltGallery1,
  faq: siteData.FAQ.variants.FixBoltFAQ1,
  contact: siteData.Contact.variants.FixBoltContact1,
  pricing: siteData.Pricing.variants.FixBoltPricing1,
  bookRepair: siteData.BookRepair.variants.FixBoltBookRepair1,
  pageBanner: siteData.PageBanner.variants.FixBoltPageBanner1,
  siteMeta: siteData.SiteMeta.variants.FixBoltSiteMeta1,
  pages: siteDataRaw.categories.FixBolt.templateComponents['template-1'].pages,
};

export type TopbarData = typeof siteData.Topbar.variants.FixBoltTopbar1;
export type HeaderData = typeof siteData.Header.variants.FixBoltHeader1;
export type HeroData = typeof siteData.Hero.variants.FixBoltHero1;
export type AboutData = typeof siteData.About.variants.FixBoltAbout1;
export type CountersData = typeof siteData.Counters.variants.FixBoltCounters1;
export type ServicesData = typeof siteData.Services.variants.FixBoltServices1;
export type ServiceDetailData = typeof siteData.ServiceDetail.variants.FixBoltServiceDetail1;
export type WorkProcessData = typeof siteData.WorkProcess.variants.FixBoltWorkProcess1;
export type WhyChooseUsData = typeof siteData.WhyChooseUs.variants.FixBoltWhyChooseUs1;
export type BrandsData = typeof siteData.Brands.variants.FixBoltBrands1;
export type BrandsSectionData = typeof siteData.BrandsSection.variants.FixBoltBrandsSection1;
export type TeamData = typeof siteData.Team.variants.FixBoltTeam1;
export type TeamDetailData = typeof siteData.TeamDetail.variants.FixBoltTeamDetail1;
export type TestimonialData = typeof siteData.Testimonial.variants.FixBoltTestimonial1;
export type TestimonialsGridData = typeof siteData.TestimonialsGrid.variants.FixBoltTestimonialsGrid1;
export type BlogData = typeof siteData.Blog.variants.FixBoltBlog1;
export type BlogDetailData = typeof siteData.BlogDetail.variants.FixBoltBlogDetail1;
export type FooterData = typeof siteData.Footer.variants.FixBoltFooter1;
export type CareerData = typeof siteData.Career.variants.FixBoltCareer1;
export type JobDetailData = typeof siteData.JobDetail.variants.FixBoltJobDetail1;
export type RefundPolicyData = typeof siteData.RefundPolicy.variants.FixBoltRefundPolicy1;
export type NotFoundData = typeof siteData.NotFound.variants.FixBoltNotFound1;
export type SitemapData = typeof siteData.Sitemap.variants.FixBoltSitemap1;
export type GalleryData = typeof siteData.Gallery.variants.FixBoltGallery1;
export type FAQData = typeof siteData.FAQ.variants.FixBoltFAQ1;
export type ContactData = typeof siteData.Contact.variants.FixBoltContact1;
export type PricingData = typeof siteData.Pricing.variants.FixBoltPricing1;
export type BookRepairData = typeof siteData.BookRepair.variants.FixBoltBookRepair1;
export type PageBannerData = typeof siteData.PageBanner.variants.FixBoltPageBanner1;
export type SiteMetaData = typeof siteData.SiteMeta.variants.FixBoltSiteMeta1;
