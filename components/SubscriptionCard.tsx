import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import clsx from "clsx";
import { formatCurrency, formatStatusLabel, formatSubscriptionDateTime } from "@/lib/utils";

const SubscriptionCard = ({
  name,
  price,
  currency,
  icon,
  billing,
  expanded,
  color,
  category,
  onPress,
  plan,
  renewalDate,
  startDate,
  paymentMethod,
  status,
}: SubscriptionCardProps) => {
    const fall="NA"
  return (
    <Pressable
      onPress={onPress}
      className={clsx("sub-card", expanded ? "sub-card-expanded" : "bg-card")}
      style={!expanded && color ? { backgroundColor: color } : undefined}
    >
      <View className="sub-head">
        <View className="sub-main">
          <Image source={icon} className="sub-icon" />
          <View className="sub-copy">
            <Text numberOfLines={1} className="sub-title">
              {name}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" className="sub-meta">
              {category?.trim() ||
                plan?.trim() ||
                (renewalDate ? formatSubscriptionDateTime(renewalDate) : "")}
            </Text>
          </View>
        </View>
      </View>
      <View className="sub-price-box">
        <Text className="sub-price">{formatCurrency(price, currency)}</Text>
        <Text className="sub-billing">{billing}</Text>
      </View>
      {expanded && (
        <View className="sub-body">
          <View className="sub-details">
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Payment:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {paymentMethod?.trim() || fall}
                </Text>
              </View>
            </View>
                        <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Category:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {category?.trim() || plan?.trim() || fall}
                </Text>
              </View>
            </View>
                        <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Started:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {startDate ? formatSubscriptionDateTime(startDate) : "" || fall}
                </Text>
              </View>
            </View>
                        <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">RenewalDate:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {renewalDate? formatSubscriptionDateTime(renewalDate) : "" || fall}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Status:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {status? formatStatusLabel(status) : "" || fall}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default SubscriptionCard;
