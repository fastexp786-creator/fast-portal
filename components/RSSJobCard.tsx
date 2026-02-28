import Link from "next/link";

interface RSSJob {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  source: string;
}

interface Props {
  job: RSSJob;
}

export default function RSSJobCard({ job }: Props) {
  const formattedDate = new Date(job.pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const getSourceColor = (source: string) => {
    const colors: Record<string, string> = {
      'indeed.com': 'bg-blue-100 text-blue-800',
      'linkedin.com': 'bg-blue-100 text-blue-800',
      'bayt.com': 'bg-green-100 text-green-800',
      'naukri.com': 'bg-orange-100 text-orange-800',
      'rozee.com': 'bg-purple-100 text-purple-800',
      'jobstreet.com.my': 'bg-red-100 text-red-800',
      'reed.co.uk': 'bg-yellow-100 text-yellow-800',
      'usajobs.gov': 'bg-indigo-100 text-indigo-800',
      'careerbuilder.com': 'bg-pink-100 text-pink-800',
    };
    return colors[source] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="job-card bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow duration-200">
      <div className="job-card-content">
        <div className="job-card-header flex justify-between items-start mb-3">
          <h3 className="job-card-title flex-1 mr-2">
            <Link 
              href={job.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--primary)] hover:text-[var(--primary-hover)] font-semibold text-sm line-clamp-2 hover:underline transition-colors"
            >
              {job.title}
            </Link>
          </h3>
          <span className={`job-card-source text-xs px-2 py-1 rounded-full font-medium ${getSourceColor(job.source)}`}>
            {job.source}
          </span>
        </div>
        
        <p className="job-card-description text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
          {job.description}
        </p>
        
        <div className="job-card-footer flex justify-between items-center">
          <span className="job-card-date text-xs text-gray-500 dark:text-gray-400">
            {formattedDate}
          </span>
          <Link 
            href={job.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="job-card-apply-btn bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs px-3 py-1 rounded-md font-medium hover:shadow-sm transition-all duration-200"
          >
            Apply →
          </Link>
        </div>
      </div>
    </div>
  );
}
