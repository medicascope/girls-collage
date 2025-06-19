'use client'

import { useState, useEffect } from 'react'

const QuickStats = ({ heroData }) => {
  const [counts, setCounts] = useState({ students: 0, faculty: 0, departments: 0, hospitals: 0 })

  // Use stats from heroData if available, otherwise fallback
  const fallbackStats = [
    { 
      key: 'students', 
      target: 1200, 
      label: 'طالبة', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      gradient: 'from-blue-600 to-purple-600'
    },
    { 
      key: 'faculty', 
      target: 85, 
      label: 'عضو هيئة تدريس', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      gradient: 'from-purple-600 to-pink-600'
    },
    { 
      key: 'departments', 
      target: 15, 
      label: 'قسم طبي', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: 'from-pink-600 to-red-600'
    },
    { 
      key: 'hospitals', 
      target: 3, 
      label: 'مستشفى تعليمي', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: 'from-green-600 to-blue-600'
    }
  ]

  // Transform Sanity statistics to match our format
  const stats = heroData?.statistics?.length > 0 
    ? heroData.statistics.map((stat, index) => ({
        key: stat.label?.toLowerCase().replace(/\s+/g, '_') || `stat_${index}`,
        target: stat.value || fallbackStats[index]?.target || 100,
        label: stat.label || fallbackStats[index]?.label || 'إحصائية',
        icon: fallbackStats[index]?.icon || fallbackStats[0].icon,
        gradient: fallbackStats[index]?.gradient || 'from-blue-600 to-purple-600'
      }))
    : fallbackStats

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach(stat => {
        let current = 0
        const increment = stat.target / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.target) {
            current = stat.target
            clearInterval(timer)
          }
          setCounts(prev => ({ ...prev, [stat.key]: Math.floor(current) }))
        }, 50)
      })
    }

    animateCounters()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-black">{heroData?.statisticsTitle || 'الكلية في أرقام'}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {heroData?.statisticsSubtitle || 'نفتخر بما حققناه من إنجازات في مسيرتنا التعليمية والبحثية'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(stat => (
            <div key={stat.key} className="text-center group">
              <div className={`w-24 h-24 bg-gradient-to-r ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                {counts[stat.key].toLocaleString()}+
              </div>
              <div className="text-lg text-gray-600 font-medium">
                {stat.label}
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional achievements */}
        {heroData?.achievements && heroData.achievements.length > 0 && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroData.achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl card-shadow text-center">
                <div className={`text-3xl font-bold mb-2 ${
                  index === 0 ? 'text-blue-600' : 
                  index === 1 ? 'text-purple-600' : 
                  'text-pink-600'
                }`}>
                  {achievement.value}{achievement.suffix}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default QuickStats 