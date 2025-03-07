// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export default interface BrowserBehavior {
  /**
   * Returns the version string of the detected browser
   */
  version(): string;

  /**
   * Returns the major version of the detected browser
   */
  majorVersion(): number;

  /**
   * Returns the browser name
   */
  name(): string;

  /**
   * Returns whether the browser has a Chromium WebRTC implementation
   */
  hasChromiumWebRTC(): boolean;

  /**
   * Returns whether the browser has a Firefox WebRTC implementation
   */
  hasFirefoxWebRTC(): boolean;

  /**
   * Returns whether the browser requires the "playback" latency hint for Web Audio
   */
  requiresPlaybackLatencyHintForAudioContext(): boolean;

  /**
   * Returns whether the browser requires an ICE connection gathering timeout workaround
   */
  requiresIceCandidateGatheringTimeoutWorkaround(): boolean;

  /**
   * Returns the bundle policy for the browser
   */
  requiresBundlePolicy(): RTCBundlePolicy;

  /**
   * Returns whether it is needed to check connection attributes in SDP
   */
  requiresCheckForSdpConnectionAttributes(): boolean;

  /**
   * Returns whether the keyword "exact" should be omitted in a MediaStreamConstraints object
   */
  requiresNoExactMediaStreamConstraints(): boolean;

  /**
   * Returns whether the browser is supported
   */
  isSupported(): boolean;

  /**
   * Returns the browser support string
   */
  supportString(): string;

  /**
   * Returns the supported codecs
   */
  supportedVideoCodecs(): Promise<string[]>;

  /**
   * Returns whether browser supports setSinkId operation
   */
  supportsSetSinkId(): boolean;

  /**
   * Returns whether browser supports the playback of canvas-captured stream.
   */
  supportsCanvasCapturedStreamPlayback(): boolean;
}
