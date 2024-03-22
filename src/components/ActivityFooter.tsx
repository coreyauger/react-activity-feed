import React from 'react';
import classNames from 'classnames';
import { Activity, UR } from 'getstream';

import { LikeButton } from './LikeButton';
import { RepostButton } from './RepostButton';
import { Flex } from './Flex';
import { DefaultAT, DefaultUT } from '../context/StreamApp';
import { ActivityProps } from './Activity';

export type ActivityFooterProps<
  UT extends DefaultUT = DefaultUT,
  AT extends DefaultAT = DefaultAT,
  CT extends UR = UR,
  RT extends UR = UR,
  CRT extends UR = UR
> = Pick<ActivityProps<UT, AT, CT, RT, CRT>, 'activity' | 'feedGroup' | 'userId' | 'className' | 'style'> & {
  onLike?: (activity: Activity<AT>) => void;
  targetFeeds?: string[];
};

export const ActivityFooter = <
  UT extends DefaultUT = DefaultUT,
  AT extends DefaultAT = DefaultAT,
  CT extends UR = UR,
  RT extends UR = UR,
  CRT extends UR = UR
>({
  activity,
  feedGroup = 'user',
  userId,
  onLike,
  targetFeeds,
  className,
  style,
}: ActivityFooterProps<UT, AT, CT, RT, CRT>) => (
  <div className={classNames('raf-activity-footer', className)} style={style}>
    <div className="raf-activity-footer__left" />
    <div className="raf-activity-footer__right">
      <Flex a="center">
        <LikeButton<UT, AT, CT, RT, CRT> onLike={onLike} activity={activity} targetFeeds={targetFeeds} />
        <RepostButton<UT, AT, CT, RT, CRT>
          activity={activity}
          targetFeeds={targetFeeds}
          feedGroup={feedGroup}
          userId={userId}
        />
      </Flex>
    </div>
  </div>
);
