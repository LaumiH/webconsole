package WebUI

import "github.com/free5gc/openapi/models"

type StaticIPSlice struct {
	ServingPlmnId string         `json:"servingPlmnId"`
	Snssai        *models.Snssai `json:"snssai"`
	Dnn           string         `json:"dnn"`
}

type StaticIPv4AddressSliceMap struct {
	Ipv4Address string           `json:"ipv4Address"`
	Slices      []*StaticIPSlice `json:"slices"`
}
