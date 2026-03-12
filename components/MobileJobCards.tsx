"use client";

import { useState, useRef, useEffect } from "react";
import { Heart, X, ChevronLeft, ChevronRight, RefreshCw, Bell } from "lucide-react";
import EnhancedJobCard from "./EnhancedJobCard";

interface SwipeJob {
  id: string;
  title: string;
  company: string;
  location: string;
  city: string;
  country: string;
  salary: string;
  type: "full-time" | "part-time" | "contract" | "remote";
  experience: "entry" | "mid" | "senior";
  postedAt: string;
  description: string;
  skills: string[];
  benefits: string[];
  logo?: string;
  saved?: boolean;
}

interface MobileJobCardsProps {
  jobs: SwipeJob[];
  onSave?: (jobId: string) => void;
  onDismiss?: (jobId: string) => void;
  onRefresh?: () => void;
  isLoading?: boolean;
}

export default function MobileJobCards({ 
  jobs, 
  onSave, 
  onDismiss, 
  onRefresh,
  isLoading = false 
}: MobileJobCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const currentJob = jobs[currentIndex];
  const isLastCard = currentIndex >= jobs.length - 1;

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      
      const touchX = e.touches[0].clientX;
      const offset = touchX - dragStartX;
      setDragOffset(offset);
      
      if (Math.abs(offset) > 50) {
        setSwipeDirection(offset > 0 ? 'right' : 'left');
      } else {
        setSwipeDirection(null);
      }
    };

    const handleTouchEnd = () => {
      if (!isDragging) return;
      
      if (Math.abs(dragOffset) > 100) {
        handleSwipe();
      } else {
        setDragOffset(0);
        setSwipeDirection(null);
      }
      
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, dragStartX, dragOffset]);

  const handleSwipeStart = (e: React.TouchEvent | React.MouseEvent) => {
    if ('touches' in e) {
      setDragStartX(e.touches[0].clientX);
    } else {
      setDragStartX(e.clientX);
    }
    setIsDragging(true);
    setDragOffset(0);
    setSwipeDirection(null);
  };

  const handleSwipe = () => {
    if (swipeDirection === 'right') {
      handleSave();
    } else if (swipeDirection === 'left') {
      handleDismiss();
    }
    
    setDragOffset(0);
    setSwipeDirection(null);
  };

  const handleSave = () => {
    if (currentJob && onSave) {
      onSave(currentJob.id);
    }
    nextCard();
  };

  const handleDismiss = () => {
    if (currentJob && onDismiss) {
      onDismiss(currentJob.id);
    }
    nextCard();
  };

  const nextCard = () => {
    if (!isLastCard) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getCardTransform = () => {
    const rotation = dragOffset * 0.1;
    const scale = 1 - Math.abs(dragOffset) * 0.0005;
    return `translateX(${dragOffset}px) rotate(${rotation}deg) scale(${scale})`;
  };

  const getCardOpacity = () => {
    return Math.max(0, 1 - Math.abs(dragOffset) * 0.003);
  };

  const getSwipeOverlay = () => {
    if (!swipeDirection) return null;
    
    return (
      <div 
        className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 ${
          swipeDirection === 'right' ? 'bg-green-500/20' : 'bg-red-500/20'
        }`}
      >
        <div className={`flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-2xl ${
          swipeDirection === 'right' ? 'bg-green-500' : 'bg-red-500'
        }`}>
          {swipeDirection === 'right' ? (
            <>
              <Heart className="w-8 h-8 fill-current" />
              Save
            </>
          ) : (
            <>
              <X className="w-8 h-8" />
              Pass
            </>
          )}
        </div>
      </div>
    );
  };

  if (jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12">
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <RefreshCw className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No more jobs</h3>
          <p className="text-gray-600 mb-4">Check back later for new opportunities</p>
          {onRefresh && (
            <button
              onClick={onRefresh}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Loading...' : 'Refresh'}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-4">
        <div className="text-sm text-gray-600">
          {currentIndex + 1} of {jobs.length}
        </div>
        <button
          onClick={onRefresh}
          disabled={isLoading}
          className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* Card Stack */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Background Cards */}
        {jobs.slice(currentIndex + 1, currentIndex + 3).map((job, index) => (
          <div
            key={job.id}
            className="absolute inset-0 bg-white rounded-lg border border-gray-200 shadow-lg"
            style={{
              transform: `scale(${1 - (index + 1) * 0.1}) translateY(${(index + 1) * 10}px)`,
              opacity: 0.3 - index * 0.1,
              zIndex: 10 - index
            }}
          />
        ))}

        {/* Current Card */}
        {currentJob && (
          <div
            ref={cardRef}
            className="absolute inset-0 bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden cursor-grab active:cursor-grabbing"
            style={{
              transform: getCardTransform(),
              opacity: getCardOpacity(),
              zIndex: 20,
              transition: isDragging ? 'none' : 'all 0.3s ease'
            }}
            onMouseDown={handleSwipeStart}
            onTouchStart={handleSwipeStart}
          >
            {/* Swipe Overlay */}
            {getSwipeOverlay()}

            {/* Job Card Content */}
            <div className="h-full overflow-y-auto">
              <EnhancedJobCard 
                job={currentJob} 
                onSave={() => handleSave()}
                showQuickView={false}
              />
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4 mt-6 px-4">
        <button
          onClick={handleDismiss}
          className="w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex gap-2">
          <button
            onClick={previousCard}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300 transition-colors disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextCard}
            disabled={isLastCard}
            className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300 transition-colors disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <button
          onClick={handleSave}
          className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        >
          <Heart className="w-6 h-6" />
        </button>
      </div>

      {/* Instructions */}
      <div className="text-center mt-4 px-4">
        <p className="text-sm text-gray-600">
          Swipe right to save • Swipe left to pass
        </p>
      </div>
    </div>
  );
}
