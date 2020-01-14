class TeamspeakClient {
  int clid;
  int cid;
  int clientDatabaseId;
  String clientNickname;
  int clientType;
  int clientAway;
  int clientFlagTalking;
  int clientInputMuted;
  int clientOutputMuted;
  int clientInputHardware;
  int clientOutputHardware;
  int clientTalkPower;
  int clientIsTalker;
  int clientIsPrioritySpeaker;
  int clientIsRecording;
  int clientIsChannelCommander;
  String clientUniqueIdentifier;
  List<int> clientServergroups;
  int clientChannelGroupId;
  int clientChannelGroupInheritedChannelId;
  String clientVersion;
  String clientPlatform;
  int clientIdleTime;
  int clientCreated;
  int clientLastconnected;
  int clientIconId;
  String clientCountry;
  String connectionClientIp;
  String sNamespace;

  TeamspeakClient(
      {clid,
      cid,
      clientDatabaseId,
      clientNickname,
      clientType,
      clientAway,
      clientFlagTalking,
      clientInputMuted,
      clientOutputMuted,
      clientInputHardware,
      clientOutputHardware,
      clientTalkPower,
      clientIsTalker,
      clientIsPrioritySpeaker,
      clientIsRecording,
      clientIsChannelCommander,
      clientUniqueIdentifier,
      clientServergroups,
      clientChannelGroupId,
      clientChannelGroupInheritedChannelId,
      clientVersion,
      clientPlatform,
      clientIdleTime,
      clientCreated,
      clientLastconnected,
      clientIconId,
      clientCountry,
      connectionClientIp,
      sNamespace});

  TeamspeakClient.fromJson(dynamic json) {
    clid = json['clid'];
    cid = json['cid'];
    clientDatabaseId = json['client_database_id'];
    clientNickname = json['client_nickname'];
    clientType = json['client_type'];
    clientAway = json['client_away'];
    clientFlagTalking = json['client_flag_talking'];
    clientInputMuted = json['client_input_muted'];
    clientOutputMuted = json['client_output_muted'];
    clientInputHardware = json['client_input_hardware'];
    clientOutputHardware = json['client_output_hardware'];
    clientTalkPower = json['client_talk_power'];
    clientIsTalker = json['client_is_talker'];
    clientIsPrioritySpeaker = json['client_is_priority_speaker'];
    clientIsRecording = json['client_is_recording'];
    clientIsChannelCommander = json['client_is_channel_commander'];
    clientUniqueIdentifier = json['client_unique_identifier'];
    clientServergroups = json['client_servergroups'].cast<int>();
    clientChannelGroupId = json['client_channel_group_id'];
    clientChannelGroupInheritedChannelId = json['client_channel_group_inherited_channel_id'];
    clientVersion = json['client_version'];
    clientPlatform = json['client_platform'];
    clientIdleTime = json['client_idle_time'];
    clientCreated = json['client_created'];
    clientLastconnected = json['client_lastconnected'];
    clientIconId = json['client_icon_id'];
    clientCountry = json['client_country'];
    connectionClientIp = json['connection_client_ip'];
    sNamespace = json['_namespace'];
  }

  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{};
    data['clid'] = clid;
    data['cid'] = cid;
    data['client_database_id'] = clientDatabaseId;
    data['client_nickname'] = clientNickname;
    data['client_type'] = clientType;
    data['client_away'] = clientAway;
    data['client_flag_talking'] = clientFlagTalking;
    data['client_input_muted'] = clientInputMuted;
    data['client_output_muted'] = clientOutputMuted;
    data['client_input_hardware'] = clientInputHardware;
    data['client_output_hardware'] = clientOutputHardware;
    data['client_talk_power'] = clientTalkPower;
    data['client_is_talker'] = clientIsTalker;
    data['client_is_priority_speaker'] = clientIsPrioritySpeaker;
    data['client_is_recording'] = clientIsRecording;
    data['client_is_channel_commander'] = clientIsChannelCommander;
    data['client_unique_identifier'] = clientUniqueIdentifier;
    data['client_servergroups'] = clientServergroups;
    data['client_channel_group_id'] = clientChannelGroupId;
    data['client_channel_group_inherited_channel_id'] = clientChannelGroupInheritedChannelId;
    data['client_version'] = clientVersion;
    data['client_platform'] = clientPlatform;
    data['client_idle_time'] = clientIdleTime;
    data['client_created'] = clientCreated;
    data['client_lastconnected'] = clientLastconnected;
    data['client_icon_id'] = clientIconId;
    data['client_country'] = clientCountry;
    data['connection_client_ip'] = connectionClientIp;
    data['_namespace'] = sNamespace;

    return data;
  }
}
