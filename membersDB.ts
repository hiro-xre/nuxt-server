import type { Member } from '@/interface';

export function createMemberList(): Map<number, Member> {
  const memberListInit = new Map<number, Member>();
    memberListInit.set(33456, {id: 33456, name: "田中", email: "sample@sample.com", points: 35, note: "初回特典あり。"});
    memberListInit.set(44783, {id: 44783, name: "鈴木", email: "sample2@sample2.com", points: 53});

    return memberListInit;
}

