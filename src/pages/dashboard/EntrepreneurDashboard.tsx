import React, { useState } from 'react';
import { 
  BookOpen, 
  Heart, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users,
  ChevronRight,
  BarChart3,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

interface DashboardSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  progress: number;
  status: 'completed' | 'in-progress' | 'not-started';
  details: {
    completed: number;
    total: number;
    nextAction?: string;
  };
}

const EntrepreneurDashboard = () => {
  const [activeSection, setActiveSection] = useState<string>('business-plan');

  const sections: DashboardSection[] = [
    {
      id: 'business-plan',
      title: 'Business Plan Status',
      icon: <FileText className="w-6 h-6" />,
      progress: 50,
      status: 'in-progress',
      details: {
        completed: 3,
        total: 6,
        nextAction: 'Complete Financial Projections section'
      }
    },
    {
      id: 'social-impact',
      title: 'Social Impact Plan',
      icon: <Heart className="w-6 h-6" />,
      progress: 75,
      status: 'in-progress',
      details: {
        completed: 3,
        total: 4,
        nextAction: 'Define community engagement metrics'
      }
    },
    {
      id: 'training',
      title: 'Training Completed',
      icon: <BookOpen className="w-6 h-6" />,
      progress: 100,
      status: 'completed',
      details: {
        completed: 8,
        total: 8
      }
    },
    {
      id: 'funding',
      title: 'Funding Milestones',
      icon: <DollarSign className="w-6 h-6" />,
      progress: 25,
      status: 'in-progress',
      details: {
        completed: 1,
        total: 4,
        nextAction: 'Submit Q2 financial reports'
      }
    },
    {
      id: 'volunteer',
      title: 'Volunteer Hours',
      icon: <Clock className="w-6 h-6" />,
      progress: 0,
      status: 'not-started',
      details: {
        completed: 0,
        total: 20,
        nextAction: 'Sign up for community service'
      }
    },
    {
      id: 'shareholder',
      title: 'Shareholder Progress',
      icon: <Users className="w-6 h-6" />,
      progress: 33,
      status: 'in-progress',
      details: {
        completed: 1,
        total: 3,
        nextAction: 'Review Q2 shareholder agreement'
      }
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return <XCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getProgressBarColor = (progress: number) => {
    if (progress >= 100) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, Sarah!</h1>
              <p className="text-gray-600">Track your progress, access resources, and grow your business.</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-primary text-black px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                View Reports
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Get Help
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Overall Progress</h3>
              <BarChart3 className="text-primary w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">47%</div>
            <div className="text-sm text-green-600 flex items-center mt-2">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12% this month
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Next Milestone</h3>
              <DollarSign className="text-primary w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">$5,000</div>
            <div className="text-sm text-gray-500 mt-2">Due in 14 days</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Training Hours</h3>
              <BookOpen className="text-primary w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">24/40</div>
            <div className="text-sm text-gray-500 mt-2">60% completed</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Community Impact</h3>
              <Heart className="text-primary w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">127</div>
            <div className="text-sm text-gray-500 mt-2">People reached</div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left p-4 rounded-xl transition-colors ${
                  activeSection === section.id
                    ? 'bg-primary text-black'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {section.icon}
                    <span className="font-medium">{section.title}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    activeSection === section.id ? 'rotate-90' : ''
                  }`} />
                </div>
                <div className="mt-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">{section.progress}% Complete</span>
                    {getStatusIcon(section.status)}
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getProgressBarColor(section.progress)} transition-all duration-500`}
                      style={{ width: `${section.progress}%` }}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {sections.map((section) => (
                <div 
                  key={section.id}
                  className={activeSection === section.id ? 'block' : 'hidden'}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(section.status)}
                      <span className="text-sm text-gray-600">
                        {section.details.completed} of {section.details.total} completed
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Progress Overview */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Progress Overview</h3>
                      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${getProgressBarColor(section.progress)} transition-all duration-500`}
                          style={{ width: `${section.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Next Steps */}
                    {section.details.nextAction && (
                      <div>
                        <h3 className="font-semibold mb-2">Next Steps</h3>
                        <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg">
                          <p className="text-yellow-800">{section.details.nextAction}</p>
                        </div>
                      </div>
                    )}

                    {/* Placeholder for section-specific content */}
                    <div className="border-t pt-6">
                      <p className="text-gray-600">
                        More detailed information and actions for {section.title.toLowerCase()} will be displayed here.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurDashboard;