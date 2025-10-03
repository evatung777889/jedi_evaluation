export function fetchEvaluationData() {
    return [
            {
                id: 'sec-1',
                code: '1',
                title: '基本管理及維護',
                groups: [
                    {
                        id: 'sec-1-1',
                        code: '1-1',
                        title: '需求掌握',
                        questions: [
                            {
                                id: 'q-1',
                                code: '1-1-1',
                                title: '關鍵使用路徑分析與優化建議',
                                required: true,
                                description: '請詳細描述本系統的所有主要功能模組，並針對每一個功能模組的使用流程進行逐步說明。請分析各個關鍵路徑在實際操作過程中可能遇到的瓶頸、障礙或使用者常見問題，並提出具體的優化空間與改善建議。例如：在使用者登入、資料查詢、報表匯出等流程中，是否有步驟繁瑣、反應速度慢或介面不直覺等情形？請舉出實際案例，並說明你認為最有效的改善方式。',
                                answer: '',
                                type: 'textarea'
                            },
                            {
                                id: 'q-2',
                                code: '1-1-2',
                                title: '系統符合性情況與測試報告',
                                required: false,
                                description: '請詳細說明本系統目前的符合性情況，包括是否符合政府相關法規、資訊安全標準、內部作業規範等。請附上最近一次的測試結果、分析報告、稽核紀錄，以及後續追蹤計畫。若有不符合項目，請說明原因、影響及預計改善時程。',
                                answer: '',
                                type: 'radio'
                            },
                            {
                                id: 'q-3',
                                code: '1-1-3',
                                title: '角色分類與權限管理',
                                required: true,
                                description: '請完整列出本系統中所有角色（如管理者、一般使用者、訪客等），並針對每個角色的使用情境、權限分配、管理方式進行詳細說明。請提供權限設計的邏輯、管理流程，以及相關佐證資料或設計文件。若有特殊角色或例外權限，請特別註明。',
                                answer: '',
                                type: 'radio'
                            },
                            {
                                id: 'q-10',
                                code: '1-1-4',
                                title: '需求變更流程與溝通機制',
                                required: true,
                                description: '請詳細說明本專案在需求變更時的標準作業流程，包括如何收集使用者意見、評估需求合理性、確認變更內容、溝通協調各方意見，以及最終定案的方式。請舉例說明最近一次的需求調整案例，並說明溝通過程中遇到的挑戰與解決方式。',
                                answer: '',
                                type: 'textarea'
                            }
                        ]
                    },
                    {
                        id: 'sec-1-2',
                        code: '1-2',
                        title: '程式瑕疵掌握與修復',
                        questions: [
                            {
                                id: 'q-4',
                                code: '1-2-1',
                                title: '瑕疵報告與修復追蹤',
                                required: false,
                                description: '請詳細記錄近期發現的所有程式瑕疵，包括每個問題的詳細描述、影響範圍、受影響的功能模組、修復進度、負責人員及後續驗證方式。請說明瑕疵管理的流程、追蹤工具，以及如何確保修復後不再發生同類型問題。',
                                answer: '',
                                type: 'textarea'
                            },
                            {
                                id: 'q-11',
                                code: '1-2-2',
                                title: '自動化測試覆蓋率',
                                required: false,
                                description: '請詳細說明目前自動化測試的覆蓋率，包括單元測試、整合測試、端對端測試等。請列出使用的測試工具、測試案例設計原則、測試排程與執行頻率，並附上最近一次的測試統計數據與測試報告。',
                                answer: '',
                                type: 'radio'
                            }
                        ]
                    },
                    {
                        id: 'sec-1-3',
                        code: '1-3',
                        title: '人員掌握與培訓',
                        questions: [
                            {
                                id: 'q-5',
                                code: '1-3-1',
                                title: '人員技能評估與培訓計畫',
                                required: true,
                                description: '請詳細評估團隊成員的技能、工作經驗、專業證照、參與過的專案類型等，並說明近期的培訓計畫、課程內容、參與人員、培訓成效及未來規劃。請舉例說明培訓後對專案執行的具體幫助。',
                                answer: '',
                                type: 'textarea'
                            },
                            {
                                id: 'q-12',
                                code: '1-3-2',
                                title: '人力資源調度與備援',
                                required: false,
                                description: '請詳細說明專案在遇到人力短缺、異動、請假或突發狀況時的調度與備援機制，包括人員交接流程、知識傳承方式、臨時支援安排等。請舉例說明近期的應變措施及其成效。',
                                answer: '',
                                type: 'radio'
                            }
                        ]
                    },
                    {
                        id: 'sec-1-4',
                        code: '1-4',
                        title: '事故處理與改善',
                        questions: [
                            {
                                id: 'q-6',
                                code: '1-4-1',
                                title: '事故報告與改善建議',
                                required: true,
                                description: '請詳細記錄每一次事故發生的原因、影響範圍、受影響人員、處理流程、溝通協調方式及後續改善建議。請附上事故報告、佐證資料、改善追蹤紀錄，並說明如何預防類似事故再次發生。',
                                answer: '',
                                type: 'textarea'
                            },
                            {
                                id: 'q-13',
                                code: '1-4-2',
                                title: '緊急應變計畫',
                                required: false,
                                description: '請詳細說明系統或團隊在面對重大事故、災害、資安事件時的緊急應變計畫，包括通報流程、資源調度、臨時支援、復原機制、外部協力單位合作方式等。請舉例說明近期的演練或實際應變經驗。',
                                answer: '',
                                type: 'radio'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'sec-2',
                code: '2',
                title: '易用性',
                groups: [
                    {
                        id: 'sec-2-1',
                        code: '2-1',
                        title: '介面設計與使用者體驗',
                        questions: [
                            {
                                id: 'q-7',
                                code: '2-1-1',
                                title: '使用者友好性與易用性分析',
                                required: true,
                                description: '請詳細評估本系統介面的易用性、直觀性、美觀性、互動設計、色彩搭配、字型大小、操作流程等，並說明如何協助使用者快速上手、減少學習成本、提升工作效率。請附上使用者回饋、問卷調查、可用性測試結果等佐證資料。',
                                answer: '',
                                type: 'textarea'
                            },
                            {
                                id: 'q-14',
                                code: '2-1-2',
                                title: '多裝置支援與響應式設計',
                                required: false,
                                description: '請詳細說明本系統在不同裝置（桌機、平板、手機）上的支援情況，包括介面自動調整、功能可用性、操作流暢度等。請說明響應式設計的原則、技術選型、實作方式，並附上相關測試報告或使用者回饋。',
                                answer: '',
                                type: 'radio'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'sec-3',
                code: '3',
                title: '高可用性',
                groups: [
                    {
                        id: 'sec-3-1',
                        code: '3-1',
                        title: '系統穩定性與容錯',
                        questions: [
                            {
                                id: 'q-8',
                                code: '3-1-1',
                                title: '故障率分析與容錯機制',
                                required: true,
                                description: '請詳細分析本系統的故障率、常見問題、故障發生時的處理流程、容錯機制設計、異常監控方式等。請說明近期的改進措施、執行成效、未來預防計畫，並附上相關統計數據與佐證資料。',
                                answer: '',
                                type: 'textarea'
                            },
                            {
                                id: 'q-15',
                                code: '3-1-2',
                                title: '備援架構與資料保護',
                                required: false,
                                description: '請詳細說明本系統的備援架構設計、資料備份方式、復原機制、異地備援、定期演練等，並附上相關設計文件、測試報告、演練紀錄。請說明備援機制在實際運作中的挑戰與改進建議。',
                                answer: '',
                                type: 'radio'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'sec-4',
                code: '4',
                title: '可維護性',
                groups: [
                    {
                        id: 'sec-4-1',
                        code: '4-1',
                        title: '維護成本與優化建議',
                        questions: [
                            {
                                id: 'q-9',
                                code: '4-1-1',
                                title: '維護成本分析與優化建議',
                                required: true,
                                description: '請詳細分析本系統的維護成本，包括人力投入、維護時間、資源消耗、外包費用、升級成本等，並針對各項成本提出具體的優化建議、預期效益、執行計畫及成效評估。',
                                answer: '',
                                type: 'textarea'
                            },
                            {
                                id: 'q-16',
                                code: '4-1-2',
                                title: '文件管理與知識傳承',
                                required: false,
                                description: '請詳細說明本系統文件的管理方式、知識傳承機制、文件更新流程、版本控管、文件查詢便利性、近期的改善措施及未來規劃。請舉例說明知識傳承在團隊運作中的重要性與實際成效。',
                                answer: '',
                                type: 'radio'
                            }
                        ]
                    }
                ]
            }
        ];
}
