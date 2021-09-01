import { Field, ID, ObjectType } from 'type-graphql';
import { TrackInQueue } from './Queue';

@ObjectType()
export class Session {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field(() => [ID])
  trackIds: string[];

  @Field(() => [TrackInQueue], { nullable: true })
  queue?: TrackInQueue[];
}
