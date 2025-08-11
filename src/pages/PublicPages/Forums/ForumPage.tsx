// pages/ForumPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Forum from '../../../components/Forum/Forum.tsx';
import { events } from '../../../store/events.ts';

const ForumPage: React.FC = () => {
    const { year } = useParams<{ year: string }>();
    const event = events[year ?? ''];

    if (!event) {
        return <div className="p-8 text-red-600">Event not found</div>;
    }

    return <Forum event={event} />;
};

export default ForumPage;
