import {
  useQuery
} from '@tanstack/react-query'
import {
  getClashLeaderboardLog,
  getClashRoyaleBattleLog,
  getClashRoyaleStats,
} from '../apis/clash.ts'
import { useAuth0 } from '@auth0/auth0-react'

export function useClash() {
  const { user, getAccessTokenSilently } = useAuth0()
  const query = useQuery({
    queryKey: ['clash'],
    enabled: !!user,
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return getClashRoyaleStats(token)
    },
  })
  return {
    ...query,
  }
}

export function useClashBattleLog() {
  const { user, getAccessTokenSilently } = useAuth0()
  const query = useQuery({
    queryKey: ['battlelog'],
    enabled: !!user,
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return getClashRoyaleBattleLog(token)
    },
  })
  return {
    ...query,
  }
}

export function useClashLeaderboardLog() {
  const query = useQuery({
    queryKey: ['leaderboard'],
    queryFn: getClashLeaderboardLog,
  })
  return {
    ...query,
  }
}
