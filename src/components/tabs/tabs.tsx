import { TabType } from '../../const.ts';
import TabOverview from '../tab-overview/tab-overview.tsx';
import TabDetails from '../tab-details/tab-details.tsx';
import TabReviews from '../tab-reviews/tab-reviews.tsx';
import TabLink from '../tab-link/tab-link.tsx';
import { SyntheticEvent, useState } from 'react';
import { FilmCardType } from '../../types.ts';

type TabsProps = {
  filmCard: FilmCardType;
};

const getActiveTab = (tab: TabType, filmCard: FilmCardType) => {
  switch (tab) {
    case TabType.Details:
      return <TabDetails filmCard={filmCard} />;
    case TabType.Reviews:
      return <TabReviews />;
    default:
    case TabType.Overview:
      return <TabOverview filmCard={filmCard} />;
  }
};

export default function Tabs({ filmCard }: TabsProps) {
  const [activeTab, setActiveTab] = useState(TabType.Overview);

  const handleTabChange = (evt: SyntheticEvent) => {
    const targetId = evt.currentTarget.id as TabType;
    if (targetId) {
      setActiveTab(targetId);
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <TabLink
            tabType={TabType.Overview}
            activeTab={activeTab}
            onClick={handleTabChange}
            key={TabType.Overview}
          />
          <TabLink
            tabType={TabType.Details}
            activeTab={activeTab}
            onClick={handleTabChange}
            key={TabType.Details}
          />
          <TabLink
            tabType={TabType.Reviews}
            activeTab={activeTab}
            onClick={handleTabChange}
            key={TabType.Reviews}
          />
        </ul>
      </nav>
      {getActiveTab(activeTab, filmCard)}
    </div>
  );
}
