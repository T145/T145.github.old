/* eslint-disable camelcase */
declare module 'react-player/youtube' {
  import React from 'react';
  import ReactPlayer from 'react-player';

  type YoutubeConfig = {
    youtube: {
      playerVars?: {
        // https://developers.google.com/youtube/player_parameters?playerVersion=HTML5
        autoplay?: 0 | 1;
        cc_lang_pref?: string; // https://www.loc.gov/standards/iso639-2/php/code_list.php
        cc_load_policy?: 0 | 1;
        color?: 'red' | 'white';
        controls?: 0 | 1;
        disablekb?: 0 | 1;
        enablejsapi?: 0 | 1;
        end?: number;
        fs?: 0 | 1; // fullscreen
        hl?: string; // player interface language
        iv_load_policy?: 1 | 3;
        list?: string;
        listType?: 'search' | 'user_uploads' | 'playlist';
        loop?: 0 | 1;
        modestbranding?: 0 | 1;
        origin?: string;
        playlist?: string;
        playsinline?: 0 | 1;
        rel?: 0 | 1; // show related videos or not (keep analytics in mind)
        // showinfo is deprecated
        start?: number;
        widget_referrer?: string;
      };
      embedOptions?: {
        width?: number | string;
        height?: number | string;
        videoId?: string;
        events?: unknown;
      };
      onUnstarted?: unknown;
    };
  };

  export interface ReactYoutubePlayerProps {
    url?: string | string[] | SourceProps[] | MediaStream;
    playing?: boolean;
    loop?: boolean;
    controls?: boolean;
    volume?: number;
    muted?: boolean;
    playbackRate?: number;
    width?: string | number;
    height?: string | number;
    style?: unknown;
    progressInterval?: number;
    playsinline?: boolean;
    pip?: boolean;
    stopOnUnmount?: boolean;
    light?: boolean | string;
    wrapper?: any;
    config?: YoutubeConfig;
    onReady?(player: ReactPlayer): void;
    onStart?(): void;
    onPlay?(): void;
    onPause?(): void;
    onBuffer?(): void;
    onBufferEnd?(): void;
    onEnded?(): void;
    onEnablePIP?(): void;
    onDisablePIP?(): void;
    onError?(error: any, data?: any, hlsInstance?: any, hlsGlobal?: any): void;
    onDuration?(duration: number): void;
    onSeek?(seconds: number): void;
    onProgress?(state: {
      played: number;
      playedSeconds: number;
      loaded: number;
      loadedSeconds: number;
    }): void;
    [otherProps: string]: any;
  }

  export default class ReactYoutubePlayer extends React.Component<
    ReactYoutubePlayerProps,
    any
  > {
    getInternalPlayer(key?: string): unknown;

    getCurrentTime(): number;

    getSecondsLoaded(): number;

    getDuration(): number;

    showPreview(): void;

    seekTo(amount: number, type?: 'seconds' | 'fraction'): void;

    static canPlay(url: string): boolean;

    static canEnablePIP(url: string): boolean;

    static addCustomPlayer(player: ReactPlayer): void;

    static removeCustomPlayers(): void;
  }
}
