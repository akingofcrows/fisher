//=============================================================================
// TMPlugin - カードゲーム
// バージョン: 0.1.7d
// 最終更新日: 2019/05/14
// 配布元　　: https://hikimoki.sakura.ne.jp/
//-----------------------------------------------------------------------------
// Copyright (c) 2016 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================
// 
// modified and transalted by xabileug 2019
//=============================================================================
/*:
 * @plugindesc Card Battle automatic card game
 * tested on RPG Maker MV Version 1.6.1 compatible
 *
 * @author tomoaky (https://hikimoki.sakura.ne.jp/)
 *
 * @param vnResult
 * @desc カードゲームの結果が代入されるゲーム変数番号。
 * 初期値: 1
 * @default 1
 *
 * @param vnMaxDeck
 * @desc 登録可能なデッキの最大数として扱うゲーム変数番号。
 * 初期値: 2
 * @default 2
 *
 * @param vnMaxCard
 * @desc 組み込めるカードの最大数として扱うゲーム変数番号。
 * 初期値: 3
 * @default 3
 *
 * @param vnMaxCost
 * @desc デッキのコスト上限として扱うゲーム変数番号。
 * 初期値: 4
 * @default 4
 *
 * @param fixCardNum
 * @desc デッキのカード枚数を最大値に固定するかどうか。
 * 初期値: 1 ( 0 で少ない枚数を許可 / 1 で最大値に限定 )
 * @default 1
 *
 * @param sameCard
 * @desc 同じカードを複数組み込めるかどうか。
 * 初期値: 1 ( 0 で組み込めない / 1 で組み込める )
 * @default 1
 *
 * @param useItemCard
 * @desc アイテムカードを利用するかどうか。
 * 初期値: 1 ( 0 do not use / 1 use )
 * @default 1
 *
 * @param useAutoText
 * @desc generate card by script
 * 初期値: 1 ( 0 do not use / 1 use )
 * @default 1
 *
 * @param commandDeckEdit
 * @desc メニューのデッキ編集コマンド。
 * 初期値: デッキ編集
 * @default デッキ編集
 *
 * @param statusWindowWidth
 * @desc デッキ編集のカードステータスウィンドウの幅。
 * 初期値: 360
 * @default 360
 *
 * @param maxAtk
 * @desc 攻撃力の上限。
 * 初期値: 8
 * @default 8
 *
 * @param maxTurn
 * @desc このターン数を超えたら引き分けにする。
 * 初期値: 30
 * @default 30
 *
 * @param maxCardTurn
 * @desc このターン数を超えたら引き分けにする。
 * 初期値: 10
 * @default 10
 *
 * @param animationAttack
 * @desc 攻撃のアニメーション番号。
 * 初期値: 1
 * @default 1
 * @require 1
 * @type animation
 *
 * @param animationEnemyAttack
 * @desc 攻撃のアニメーション番号（エネミーカード）。
 * 初期値: 1
 * @default 1
 * @require 1
 * @type animation
 *
 * @param animationTypeBonus
 * @desc タイプボーナスのアニメーション番号。
 * 初期値: 52
 * @default 52
 * @require 1
 * @type animation
 *
 * @param paramNames
 * @desc 各種パラメータの名称。
 * 初期値: 名前 レア度 コスト ＨＰ 攻撃力 タイプ スキル 固有スキル 継承スキル 属性
 * @default 名前 レア度 コスト ＨＰ 攻撃力 タイプ スキル 固有スキル 継承スキル 属性
 *
 * @param itemCardParamNames
 * @desc アイテムカードの各種パラメータのの名称。
 * 初期値: ため時間 基本効果 特殊効果
 * @default ため時間 基本効果 特殊効果
 *
 * @param typeIcons
 * @desc カードタイプのアイコン番号。
 * 初期値: 76 77 81 79 176
 * @default 76 77 81 79 176
 *
 * @param typeSpeed
 * @desc カードタイプのスピード値。
 * 初期値: 1 4 0 2
 * @default 1 4 0 2
 *
 * @param elementIcons
 * @desc カード属性のアイコン番号。
 * 初期値: 64 65 66 67 68 69 70 71
 * @default 64 65 66 67 68 69 70 71
 *
 * @param rareNames
 * @desc カード稀少度の名称。
 * 初期値: Common Uncommon Rare Legend
 * @default Common Uncommon Rare Legend
 *
 * @param costIcon
 * @desc コスト表示のアイコン番号。
 * 初期値: 87
 * @default 87
 *
 * @param costIconSpace
 * @desc コスト表示のアイコン間隔。
 * 初期値: 20
 * @default 20
 *
 * @param positionNames
 * @desc カードポジションの名称。
 * 初期値: 1st 2nd 3rd 4th 5th
 * @default 1st 2nd 3rd 4th 5th
 *
 * @param itemCardPositionName
 * @desc アイテムカードのポジションの名称。
 * 初期値: ITM
 * @default ITM
 *
 * @param deckNames
 * @desc デッキの名称。
 * 初期値: デッキＡ デッキＢ デッキＣ デッキＤ デッキＥ
 * @default デッキＡ デッキＢ デッキＣ デッキＤ デッキＥ
 *
 * @param playerCardPositions
 * @desc プレイヤーカードの表示座標。
 * 初期値: 128,264 272,184 368,184 464,184 560,184
 * @default 128,264 272,184 368,184 464,184 560,184
 *
 * @param playerItemCardPosition
 * @desc プレイヤーアイテムカードの表示座標。
 * 初期値: 272,344
 * @default 272,344
 *
 * @param enemyCardPositions
 * @desc エネミーカードの表示座標。
 * 初期値: 688,264 544,344 448,344 352,344 256,344
 * @default 688,264 544,344 448,344 352,344 256,344
 *
 * @param enemyItemCardPosition
 * @desc エネミーアイテムカードの表示座標。
 * 初期値: 544,184
 * @default 544,184
 *
 * @param numberPositions
 * @desc ＨＰと攻撃力の表示座標。
 * 初期値: 128,488 208,456 688,488 608,456
 * @default 128,488 208,456 688,488 608,456
 *
 * @param messageWindowY
 * @type number
 * @desc カードゲームのメッセージウィンドウＹ座標
 * 初期値: 544
 * @default 544
 *
 * @param Font Card Name
 * @desc autotext font for card name
 * @default
 *
 * @param Font Card Number
 * @desc autotext font for card HP AP
 * @default
 *
 * @param Font Sprite Number
 * @desc autotext font for sprite number
 * @default
 *
 * @param CardBattle BGM
 * @desc set battleBGM depending on variable
 * @type struct<battleBGM>
 * @default {"audio":"[]","variableId":"0"}
 * @parent dataType
 *
 * @param CardBattle BackImage
 * @desc set backimage depending on variable
 * @type struct<backimage>
 * @default {"images":"[]","variableId":"0"}
 * @parent dataType
 *
 * @param vnBattleCount
 * @type number
 * @desc automatically increase count store on this var
 * @default 5
 *
 * @param vnWins
 * @type number
 * @desc automatically increase count store on this var
 * @default 6
 *
 * @param vnDraw
 * @type number
 * @desc automatically increase count store on this var
 * @default 7
 *
 * @param vnLose
 * @type number
 * @desc automatically increase count store on this var
 * @default 8
 *
 * @param vnCancel
 * @type number
 * @desc automatically increase count store on this var
 * @default 9
 *
 * @param vnTimeout
 * @type number
 * @desc automatically increase count store on this var
 * @default 10
 *
 * @param vnBattleGrade
 * @type number
 * @desc determine grade of battle win
 * @default 11
 *
 * @param Number of Particles
 * @desc Number of Particles
 * @default 15
 *
 * @param Unique Particles
 * @desc Unique Particles
 * @default false
 *
 * @param X-Axis Speed
 * @desc X-Axis Speed
 * @default 0
 *
 * @param Y-Axis Speed
 * @desc Y-Axis Speed
 * @default -1
 *
 * @param Rotation Speed
 * @desc Rotation Speed
 * @default 1
 *
 * @param Blend Mode
 * @desc Blend Mode
 * @default 1
 *
 * @requiredAssets img/pictures/c_back_0
 * @requiredAssets img/pictures/c_back_1
 * @requiredAssets img/pictures/c_back_2
 * @requiredAssets img/pictures/c_back_3
 * @requiredAssets img/pictures/c_back_i
 * @requiredAssets img/pictures/c_cursor
 * @requiredAssets img/pictures/c_frame_0
 * @requiredAssets img/pictures/c_frame_1
 * @requiredAssets img/pictures/c_frame_2
 * @requiredAssets img/pictures/c_frame_3
 * @requiredAssets img/pictures/c_frame_4
 * @requiredAssets img/pictures/c_frame_5
 * @requiredAssets img/pictures/c_frame_6
 * @requiredAssets img/pictures/c_frame_7
 * @requiredAssets img/pictures/c_frame_i
 * @requiredAssets img/pictures/c_rare_0
 * @requiredAssets img/pictures/c_rare_1
 * @requiredAssets img/pictures/c_rare_2
 * @requiredAssets img/pictures/c_rare_3
 * @requiredAssets img/pictures/c_rare_4
 * @requiredAssets img/pictures/c_rare_5
 * @requiredAssets img/pictures/c_rare_6
 * @requiredAssets img/pictures/c_rare_7
 * @requiredAssets img/pictures/card_0
 * @requiredAssets img/pictures/cardbattle
 * @requiredAssets img/pictures/particles
 *
 *
 * @noteParam cardImage
 * @noteRequire 1
 * @noteDir img/pictures/
 * @noteType file
 * @noteData items
 *
 * @noteParam cardAttackAnimation
 * @noteRequire 1
 * @noteType animation
 * @noteData items
 *
 * @help
 * TMPlugin - Card Game ver0.1.7e
 * Requires RS_MessageAlign : for text align
 *
 * Modification History
 * 7e : rename of Decks possible
 *      VnBattleGrade added (SS, S, A, B, C, D)
 *
 * 7d : allow variable to control backimage and battle BGM
 *      added object cardturn -> shows card turn of each card
 *      added victory when maxCardTurn is reached
 *      added message display turncount left
 *      added message Battle Start + First Attack
 *      improved skill copy steal
 *      improved state rebound, added regen poison, enrage, enfeeble
 *      added MOG_particles to card battle scene
 *      updated to message to drawTextEx function
 *      rearranged card bitmap alignment
 *      modified window card battle status
 *      option to set text font cardname, sprite number, card atk hp
 *
 * 7c : added set card battle back image to cardbattle.png in img/pictures
 *      added vnBattlecount vnWins vnLose vnDraw vnCancel vnTimeout
 *      automatically adjust to center on resolution change
 *      adjusted spacing between icon and name in bitmap
 *      rearranged parameters in status window
 *
 * 7b : latest by tomoaky
 *
 * Suggestions for update
 * 1. card timeline - show bar graphics skill activation and knockout
 * 2. card max turn countdown - show image like HP and Atk and cursor
 * 3. ability to swap card position
 * 4. concealed card during battle
 * 5. victory condition when card turn reaches X
 *                      when card position X is eliminated
 *                      when total damage X is dealt
 *                      when total HP gained is X
 * 6. trigger common events after x turn
 * 7. card equip conditions - restrict certain cards to be equipped
 *    with plugin command clear active deck -> remove all equips
 * 8. card statistics Battles Wins Loses
 * 9. animated effect of cards for rarity including hologram effect
 * 10. visible 1st turn calculations
 * 11. plugin command show picture of card when using autotext
 * 12. draw actor face enemy face / SV battler
 * 13. no compatibility with auto tint time system scripts
 * 14. transition effect entrance and exit
 * 15. plugin remove all cards, lose card when lose, gain card when win
 * 16. rename decks with rename function
 * 17. ++++complex+++ card upgrade evolve instance item
 * 18. link enemy deck to actor ID
 * 19. card edition and card id number
 * 20. show winner loser sprite image, battle start animation
 *
 * oo added cardbattle as default image *** DONE ***
 * oo automatically count battle, wins, lose, draw  *** DONE ***
 * oo automatically adjust to center when resolution change.. tested on 1080 x 720 *** DONE ***
 * oo battle back image controlled by variable *** DONE ***
 * oo battle BGM controlled by variable *** DONE ***
 * oo show card turn *** DONE ***
 * oo victory condition when player/ enemy card reach maxCardTurn *** DONE ***
 * oo first turn message *** DONE ***
 * oo add recoil skill REGEN / POISON *** DONE ***
 * oo add particles to scene -> embed Moghunter Falling *** DONE ***
 * oo colored text set player card Blue, enemy card Red, skill violet, damage red *** DONE ***
 * oo custimization for font at parameters *** DONE ***
 *
 * Instructions:
 *
 *   The following have been translated
 * 　check webiste for original (JAP)
 *
 *   This plug-in has been tested on RPG Maker MV Version 1.6.1.
 *
 *   This plugin is distributed under MIT license, commercial use,
 *   You can use it freely, such as remodeling and redistribution.
 *
 *   Audio Set Battle1, VictoryME, DefeatME
 *
 *   vnResult setup conditional branch
 *   -1 when cancel deckEdit
 *    0 when draw (both vsrd HP is 0)
 *    1 when player loses
 *    2 when player wins
 *    3 when timeout (exceeds value of maxTurn)
 *
 * Note tag (item):
 *
 *   <cardCost:1>
 *     set card cost to 1
 *
 *   <cardHp:10>
 *     set card HP to 10
 *
 *   <cardAtk:2>
 *     set card attack to 2
 *
 *   <cardType:0>
 *     set card type to 0
 *     0 = assault, 1 = spell, 2 = tech, 3 = special, 4 = item
 *
 *   <cardElement:1>
 *     set card element to 1
 *     you can set your own type, image support upto 8 frames
 *     example default in database
 *     0 = fire 1 = water 2 = thunder 3 = ice
 *     4 = earth 5 = wind 6 = dark 7 = light
 *
 *   <cardRare:2>
 *     set card rarity to 2
 *     you can set your own rarity upto 8 levels, custom img
 *     in the demo 4 rarity
 *     common uncommon rare legend
 *     you can add
 *     starter limited mythic special
 *     in summary C U R SR SSR UR
 *     from other games
 *     normal rare super_rare super_super_rare ultra_rare limited_UR
 *     animated frame support for holo effect is not supported
 *
 *   <unitSkill:20>
 *     set unit skill to skill ID 20
 *     unit skill is not inherited by next cards
 *
 *   <partySkill:21>
 *     set party skill to skill ID 12
 *     party skill is inherited by next cards
 *
 *   <cardAttackAnimation:2>
 *     set attack animation to anime ID 2
 *     省略された場合はプラグインパラメータ『animationAttack』及び
 *     『animationEnemyAttack』が適用されます。
 *     this is anime on target
 *
 *   <cardImage:sample_card>
 *     place all images on folder img/pictures
 *     sets card image as sample_card.png
 *     alternate you can have file name as card_X
 *     where X is the item ID
 *
 *   Note tag (skill):
 *
 *   <cardEffect:1,2>
 *     set card effect as effect, param
 *     in this case effect 1 is extra damage
 *     param is 2
 *     deal extra 2 damage
 *
 *   <cardRules:2,0 7,2>
 *     set the activation condition rule, param
 *     multiple conditions can be used, separate by single space
 *     2 is enemy turn, 0 is prep phase
 *     7 is enemy position, 2 is(3rd card)
 *
 *   <cardRepeats:2>
 *     set repeat of effect up to 2 times
 *     number of times the skill will activate
 *
 * Plugin commands:
 *
 *   startCardBattle enemy 0 1,2,3
 *     <enemy_name card item card1, card2, card3>
 *     use this plug in to start card battle
 *     player will use the deck 1 by default
 *
 *   startDeckSelect enemy 0 1,2,3
 *     player can select a deck to use
 *     if deck select is cancelled
 *     vnResult var is will be -1
 *
 *   isDeckReady 1
 *     determine if player has one or more active deck
 *     switch ID 1 will be turned on
 *     オンになり、不可能な状態(カードをセットしたデッキがない)であれば
 *     オフになります。
 *
 *   startDeckEdit
 *     open Scene_deckEdit
 *
 *   disableTypeBonus
 *     disable type bonus
 *     by default, type bonus is applied
 *
 *   enableTypeBonus
 *     enable type bonus
 *
 * Note:
 *
 *   if vnMaxDeck = 0, startDeckEdit will not be visible in the menu
 *
 *   item cards have skill1 and skill2 slots which activate at the same time when conditions are met
 *   they are rebound skills that reactivate after cooltime (HP in notetag)
 *   item cards do not take the active position and will not take damage calculation
 *
 */
//=============================================================================
/*~struct~backImage:
 * @param images
 * @desc set image per variable value
 * @type file[]
 * @default []
 * @require 1
 * @dir img/pictures
 * @parent otherType
 *
 * @param variableId
 * @desc set variable ID control
 * @type variable
 * @default 0
 * @parent database
*/
//=============================================================================
/*~struct~battleBGM:
 * @param name
 * @desc set audio per variable value
 * @type file[]
 * @default []
 * @require 1
 * @dir audio/bgm
 * @parent file
 *
 * @param volume
 * @type number
 * @max 100
 * @desc volume
 * @default 90
 *
 * @param pitch
 * @type number
 * @min 50
 * @max 150
 * @desc pitch
 * @default 100
 *
 * @param pan
 * @type number
 * @min -100
 * @max 100
 * @desc pan
 * @default 0
 *
 * @param variableId
 * @desc set variable ID control
 * @type variable
 * @default 0
 * @parent database
*/

var Imported = Imported || {};
Imported.TMCard = true;

var TMPlugin = TMPlugin || {};
TMPlugin.Card = {};
TMPlugin.Card.SBI = TMPlugin.Card.SBI || {};

TMPlugin.Card.Parameters = PluginManager.parameters('TMCard');

TMPlugin.Card.mpart_selfpart = String(TMPlugin.Card.Parameters['Unique Particles'] || "false");
TMPlugin.Card.mpart_ox = Number(TMPlugin.Card.Parameters['X-Axis Speed'] || 0);
TMPlugin.Card.mpart_oy = Number(TMPlugin.Card.Parameters['Y-Axis Speed'] || -1);
TMPlugin.Card.mpart_a = Number(TMPlugin.Card.Parameters['Rotation Speed'] || 1);
TMPlugin.Card.mpart_number = Number(TMPlugin.Card.Parameters['Number of Particles'] || 15);
TMPlugin.Card.mpart_blendMode = Number(TMPlugin.Card.Parameters['Blend Mode'] || 1);
SceneManager._mpart = false;

TMPlugin.Card.FontCardName = String(TMPlugin.Card.Parameters['Font Card Name'] || "Arial");
TMPlugin.Card.FontCardNumber = String(TMPlugin.Card.Parameters['Font Card Number'] || "Arial");
TMPlugin.Card.FontSpriteNumber = String(TMPlugin.Card.Parameters['Font Sprite Number'] || "Arial");

TMPlugin.Card.VNResult	= +(TMPlugin.Card.Parameters['vnResult'] || 1);
TMPlugin.Card.VNMaxDeck = +(TMPlugin.Card.Parameters['vnMaxDeck'] || 2);
TMPlugin.Card.VNMaxCard = +(TMPlugin.Card.Parameters['vnMaxCard'] || 3);
TMPlugin.Card.VNMaxCost = +(TMPlugin.Card.Parameters['vnMaxCost'] || 4);
TMPlugin.Card.VNBattleCount = +(TMPlugin.Card.Parameters['vnBattleCount'] || 5);
TMPlugin.Card.VNWins = +(TMPlugin.Card.Parameters['vnWins'] || 6);
TMPlugin.Card.VNDraw = +(TMPlugin.Card.Parameters['vnDraw'] || 7);
TMPlugin.Card.VNLose = +(TMPlugin.Card.Parameters['vnLose'] || 8);
TMPlugin.Card.VNCancel = +(TMPlugin.Card.Parameters['vnCancel'] || 9);
TMPlugin.Card.VNTimeout = +(TMPlugin.Card.Parameters['vnTimeout'] || 10);
TMPlugin.Card.VNBattleGrade = +(TMPlugin.Card.Parameters['vnBattleGrade'] || 11);
TMPlugin.Card.FixCardNum = TMPlugin.Card.Parameters['fixCardNum'] === '1';
TMPlugin.Card.SameCard = TMPlugin.Card.Parameters['sameCard'] === '1';
TMPlugin.Card.UseItemCard = TMPlugin.Card.Parameters['useItemCard'] === '1';
TMPlugin.Card.UseAutoText = TMPlugin.Card.Parameters['useAutoText'] === '1';
TMPlugin.Card.CommandDeckEdit = TMPlugin.Card.Parameters['commandDeckEdit'] || 'デッキ編集';
TMPlugin.Card.StatusWindowWidth = +(TMPlugin.Card.Parameters['statusWindowWidth'] || 360);
TMPlugin.Card.MaxAtk = +(TMPlugin.Card.Parameters['maxAtk'] || 9);
TMPlugin.Card.MaxTurn = +(TMPlugin.Card.Parameters['maxTurn'] || 30);
TMPlugin.Card.MaxCardTurn = +(TMPlugin.Card.Parameters['maxCardTurn'] || 10); // new line
TMPlugin.Card.AnimationAttack = +(TMPlugin.Card.Parameters['animationAttack'] || 1);
TMPlugin.Card.AnimationEnemyAttack = +(TMPlugin.Card.Parameters['animationEnemyAttack'] || 1);
TMPlugin.Card.AnimationTypeBonus = +(TMPlugin.Card.Parameters['animationTypeBonus'] || 52);
TMPlugin.Card.ParamNames = TMPlugin.Card.Parameters['paramNames'].split(' ');
TMPlugin.Card.ItemCardParamNames = TMPlugin.Card.Parameters['itemCardParamNames'].split(' ');
TMPlugin.Card.TypeIcons = TMPlugin.Card.Parameters['typeIcons'].split(' ').map(Number);
TMPlugin.Card.TypeSpeed = TMPlugin.Card.Parameters['typeSpeed'].split(' ').map(Number);
TMPlugin.Card.ElementIcons = TMPlugin.Card.Parameters['elementIcons'].split(' ').map(Number);
TMPlugin.Card.RareNames = TMPlugin.Card.Parameters['rareNames'].split(' ');
TMPlugin.Card.CostIcon = +(TMPlugin.Card.Parameters['costIcon'] || 87);
TMPlugin.Card.CostIconSpace = +(TMPlugin.Card.Parameters['costIconSpace'] || 20);
TMPlugin.Card.PositionNames = TMPlugin.Card.Parameters['positionNames'].split(' ');
TMPlugin.Card.ItemCardPositionName = TMPlugin.Card.Parameters['itemCardPositionName'] || 'ITM';
TMPlugin.Card.DeckNames = TMPlugin.Card.Parameters['deckNames'].split(' ');
TMPlugin.Card.PlayerCardPositions = TMPlugin.Card.Parameters['playerCardPositions'].split(' ').map(function(pos) {
    return pos.split(',').map(Number);
});
TMPlugin.Card.PlayerItemCardPosition = TMPlugin.Card.Parameters['playerItemCardPosition'].split(',').map(Number);
TMPlugin.Card.EnemyCardPositions = TMPlugin.Card.Parameters['enemyCardPositions'].split(' ').map(function(pos) {
    return pos.split(',').map(Number);
});
TMPlugin.Card.EnemyItemCardPosition = TMPlugin.Card.Parameters['enemyItemCardPosition'].split(',').map(Number);
TMPlugin.Card.NumberPositions = TMPlugin.Card.Parameters['numberPositions'].split(' ').map(function(pos) {
    return pos.split(',').map(Number);
});
TMPlugin.Card.MessageWindowY = +(TMPlugin.Card.Parameters['messageWindowY'] || 544);

if (!TMPlugin.InterpreterBase) {
    TMPlugin.InterpreterBase = true;
    (function() {

        Game_Interpreter.prototype.convertEscapeCharactersTM = function(text) {
            text = text.replace(/\\/g, '\x1b');
            text = text.replace(/\x1b\x1b/g, '\\');
            text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
                return $gameVariables.value(parseInt(arguments[1]));
            }.bind(this));
            text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
                return $gameVariables.value(parseInt(arguments[1]));
            }.bind(this));
            text = text.replace(/\x1bN\[(\d+)\]/gi, function() {
                return this.actorNameTM(parseInt(arguments[1]));
            }.bind(this));
            text = text.replace(/\x1bP\[(\d+)\]/gi, function() {
                return this.partyMemberNameTM(parseInt(arguments[1]));
            }.bind(this));
            text = text.replace(/\x1bG/gi, TextManager.currencyUnit);
            return text;
        };

        Game_Interpreter.prototype.actorNameTM = function(n) {
            var actor = n >= 1 ? $gameActors.actor(n) : null;
            return actor ? actor.name() : '';
        };

        Game_Interpreter.prototype.partyMemberNameTM = function(n) {
            var actor = n >= 1 ? $gameParty.members()[n - 1] : null;
            return actor ? actor.name() : '';
        };

    })();
} // TMPlugin.InterpreterBase

ImageManager.loadpar = function(filename) {
    return this.loadBitmap('img/pictures/', filename, 0, true);
};

(function() {
    // new line
    var parameters = PluginManager.parameters('TMCard');

    var paramParse = function(obj) {
        return JSON.parse(JSON.stringify(obj, paramReplace));
    };

    var paramReplace = function(key, value) {
        try {
            return JSON.parse(value || null);
        } catch (e) {
            return value;
        }
    };

    var setBackImages = function(param) {
        param = paramParse(parameters[param]);
        return param instanceof Object ? param : {images:[],variableId:0};
    };

    TMPlugin.SBI = {
        cardbattle : setBackImages('CardBattle BackImage'),
    };

    var setBattleMusic = function(param) {
        param = paramParse(parameters[param]);
        return param instanceof Object ? param : {name:[],volume:90,pitch:100,pan:0,variableId:0};
    }

    TMPlugin.SBM = {
        cardmusic : setBattleMusic('CardBattle BGM'),
    }// new line end

    Game_System.prototype.get_par_array = function(object,value,type) {
        if (value.length === 0) {return};
        var s = value.split(',');
        if (type === 0){
            for (var i = 0; i < s.length; i++) {object.push(String(s[i]));	};
        } else {
            for (var i = 0; i < s.length; i++) {object.push(Number(s[i]));	};
        };
    };    // <<<<< new line

    Game_System.prototype.isTypeBonusEnabled = function() {
        return this._typeBonusEnabled == null ? true : this._typeBonusEnabled;
    };

    Game_System.prototype.setTypeBonusEnabled = function(enabled) {
        this._typeBonusEnabled = enabled;
    };

    //-----------------------------------------------------------------------------
    // Game_Party
    //
    /* this handles the maxDeck maxCard maxCost deck active deck
    */

    var _Game_Party_initialize = Game_Party.prototype.initialize;
    Game_Party.prototype.initialize = function() {
        _Game_Party_initialize.call(this);
        this._deck = [];
        this._itemCards = [];
        this._activeDeck = 0;
    };

    Game_Party.prototype.maxDeck = function() {
        return $gameVariables.value(TMPlugin.Card.VNMaxDeck);
    };

    Game_Party.prototype.maxCard = function() {
        return $gameVariables.value(TMPlugin.Card.VNMaxCard);
    };

    Game_Party.prototype.maxCost = function() {
        return $gameVariables.value(TMPlugin.Card.VNMaxCost);
    };

    // deck
    Game_Party.prototype.deck = function(index) {
        if (this._deck[index] == null) {
            this._deck[index] = [];
            for (var i = 0; i < this.maxCard(); i++) {
                this._deck[index][i] = 0;
            }
        }
        return this._deck[index];
    };

    // active deck
    Game_Party.prototype.activeDeck = function() {
        return this.deck(this._activeDeck);
    };

    // cards
    Game_Party.prototype.cards = function(index) {
        var deck = this.deck(index);
        return deck.map(function(cardId) {
            return $dataItems[cardId];
        });
    };

    // item card
    Game_Party.prototype.itemCard = function(index) {
        if (index == null) index = this._activeDeck;
        if (this._itemCards[index] == null) this._itemCards[index] = 0;
        return $dataItems[this._itemCards[index]];
    };

    // deck Cost
    Game_Party.prototype.deckCost = function(index) {
        var cards = this.cards(index).concat(this.itemCard(index));
        return cards.reduce(function(r, card) {
            return r + (card ? +card.meta.cardCost : 0);
        }, 0);
    };

    // is deck valid
    Game_Party.prototype.isDeckValid = function(index) {
        var deck = this.deck(index);
        if (TMPlugin.Card.FixCardNum) {
            return !deck.contains(0);
        } else {
            return deck.some(function(cardId) {
                return cardId > 0;
            });
        }
    };

    // is deck ready
    Game_Party.prototype.isDeckReady = function() {
        for (var i = 0; i < this.maxDeck(); i++) {
            if (this.isDeckValid(i)) return true;
        }
        return false;
    };

    // set active deck
    Game_Party.prototype.setActiveDeck = function(index) {
        if (index === -1) {
            for (var i = 0; i < this.maxDeck(); i++) {
                if (this.isDeckValid(i)) {
                    this._activeDeck = i;
                    break;
                }
            }
        } else {
            this._activeDeck = index.clamp(0, this.maxDeck() - 1);
        }
    };

    // change card : sets card in deck
    Game_Party.prototype.changeCard = function(deckId, slotId, item) {
        if (item && !this.hasItem(item)) return;
        $gameParty.loseItem(item, 1);
        if (slotId === this.maxCard()) {
            $gameParty.gainItem(this.itemCard(deckId), 1);
            this._itemCards[deckId] = item ? item.id : 0;
        } else {
            $gameParty.gainItem(this.cards(deckId)[slotId], 1);
            var deck = this.deck(deckId);
            deck[slotId] = item ? item.id : 0;
        }
    };

    Game_Party.prototype.clearDeck = function() {
        for (var i = 0; i < this.maxDeck; i++) {
            for (var j = 0; this.maxCard; j++){
                if (this.isCardChangeOk(i)) {
                    this.changeCard(i, j, null);
                }
            }
        }
    };


    //-----------------------------------------------------------------------------
    // Game_CardBattle
    //

    function Game_CardBattle() {
        this.initialize.apply(this, arguments);
    }

    Game_CardBattle.prototype.initialize = function() {
        this._maxAtk = TMPlugin.Card.MaxAtk;
    };

    Object.defineProperties(Game_CardBattle.prototype, {
        maxAtk: { get: function() { return this._maxAtk; }, configurable: true },
        turn: { get: function() { return this._turn; }, configurable: true }  // original
    });

    Game_CardBattle.prototype.setDecks = function(enemyName, enemyItemCardId, enemyCardIds) {
        this._maxAtk = TMPlugin.Card.MaxAtk;
        var playerName = $gameParty.battleMembers().length === 0 ? 'プレイヤー' : $gameParty.leader().name();
        var playerItemCard = $gameParty.itemCard();
        this._playerDeck = new Game_Deck(playerName, playerItemCard ? playerItemCard.id : 0, $gameParty.activeDeck().concat());
        this._enemyDeck = new Game_EnemyDeck(enemyName, enemyItemCardId, enemyCardIds);
        this._turn = this.makeOrders();
        this._firstAttack = this._turn;
        this._turnCount = 0;
        this._phase = 0;
        this._damage = 0;
        this._typeBonus = true;
        this._messages = [];
        this._waitCount = 0;
    };

    // 先攻を決定する (プレイヤーが先攻なら true を返す)
    Game_CardBattle.prototype.makeOrders = function() {
        // 合計コスト比較
        var a = this._playerDeck.cost();
        var b = this._enemyDeck.cost();
        if (a !== b) return a < b;
        // 先鋒カードのスピード比較
        a = TMPlugin.Card.TypeSpeed[this._playerDeck.cardType(0)];
        b = TMPlugin.Card.TypeSpeed[this._enemyDeck.cardType(0)];
        if (a !== b) return a > b;
        // 先鋒カードのＨＰ比較
        a = this._playerDeck.card(0).hp();
        b = this._enemyDeck.card(0).hp();
        if (a !== b) return a < b;
        // 先鋒カードの攻撃力比較
        a = this._playerDeck.card(0).atk();
        b = this._enemyDeck.card(0).atk();
        if (a !== b) return a < b;
        // ここまでで決着がつかなければ敵が先攻
        return false;
    };

    Game_CardBattle.prototype.playerDeck = function() {
        return this._playerDeck;
    };

    Game_CardBattle.prototype.enemyDeck = function() {
        return this._enemyDeck;
    };

    Game_CardBattle.prototype.attackerDeck = function() {
        return this._turn ? this._playerDeck : this._enemyDeck;
    };

    Game_CardBattle.prototype.targetDeck = function() {
        return this._turn ? this._enemyDeck : this._playerDeck;
    };

    Game_CardBattle.prototype.changeMaxAtk = function(value) {
        this._maxAtk = Math.max(value, 1);
    };
    // phase of the game
    Game_CardBattle.prototype.update = function() {
        this.updateWaitCount();
        this._playerDeck.update();
        this._enemyDeck.update();
        if (this.isPhaseUpdateEnable()) {
            if (this._phase === 0) {
                this.updatePreparationPhase();
            } else if (this._phase === 1) {
                this.updateCalculationPhase();
            } else if (this._phase === 2) {
                this.updateAttackPhase();
            } else if (this._phase === 3) {
                this.updateJudgmentPhase();
            } else if (this._phase === 4) {
                this.updateEndPhase();
            } else {
                AudioManager.stopMe();
                SceneManager._mpart = false; // new line
                SceneManager.pop();
            }
        }
    };

    Game_CardBattle.prototype.updateWaitCount = function() {
        if (this._waitCount > 0) this._waitCount -= 1;
    };

    Game_CardBattle.prototype.isPhaseUpdateEnable = function() {
        if (this._messages.length > 0) return false;
        if (this._waitCount > 0) return false;
        if (this._playerDeck.isAnyCardShaked()) return false;
        if (this._enemyDeck.isAnyCardShaked()) return false;
        return true;
    };

    Game_CardBattle.prototype.updatePreparationPhase = function() {
        var attacker = this.attackerDeck();
        var target = this.targetDeck();
        attacker.card().open();
        target.card().open();
        attacker.initTurnStart();
        if (this._turn === this._firstAttack && this._turnCount === 0) {
            this.addMessage(0, '\\TA[1]Battle Start ! ' + attacker.userName() + ' goes first!' );
            this._turnCount += 1;} // new line
        this.addMessage(0, attacker.userName() + ' Phase | Turn \\c[20]' + this._turnCount + ' \\c[0]of ' + TMPlugin.Card.MaxTurn);
        //var rem = (TMPlugin.Card.MaxTurn - this._turnCount)
        //if (rem > 1) {this.addMessage(0, attacker.userName() + '\'s Turn (Left: \\c[20]' + rem + ' \\c[0]Turns)' );}
        //else {this.addMessage(0, attacker.userName() + '\'s Turn \\c[20](Last Turn)' );}
        this.addMessage(0, 'Turn \\c[14]' + attacker.cardturn + ' \\c[0]of ' +  attacker.card().name() );
        this.updateRebound(attacker);
        this.checkSkill(attacker, target, true);
        this.checkSkill(target, attacker, false);
        this._phase += 1;
    };

    Game_CardBattle.prototype.updateCalculationPhase = function() {
        var attacker = this.attackerDeck();
        var target = this.targetDeck();
        this.addMessage(0, attacker.userName() + '\'s ' + attacker.card().name() + ' attacks');
        this._damage = attacker.atk;
        this.applyTypeBonus(attacker, target);
        this.checkSkill(attacker, target, true);
        this.checkSkill(target, attacker, false);
        this._phase += 1;
    };

    Game_CardBattle.prototype.updateAttackPhase = function() {
        var attacker = this.attackerDeck();
        var target = this.targetDeck();
        var animationId = attacker.card().attackAnimation();
        target.gainHp(-this._damage);
        if (this._turn) {
            this.addMessage(2, animationId || TMPlugin.Card.AnimationAttack);
        } else {
            this.addMessage(1, animationId || TMPlugin.Card.AnimationEnemyAttack);
        }
        this.addMessage(0, target.userName() + '\'s ' + target.card().name() + ' takes \\c[10]' + this._damage + ' \\c[0]damage');
        this.addMessage(4, 0);
        for (;;) {
            var attackerLastHp = attacker.hp;
            var targetLastHp = target.hp;
            this.checkSkill(attacker, target, true);
            this.checkSkill(target, attacker, false);
            if (attackerLastHp === attacker.hp && targetLastHp === target.hp) break;
        }
        this.addMessage(4, 0);
        this._phase += 1;
    };
    // waits for all skills to resolve
    Game_CardBattle.prototype.updateJudgmentPhase = function() {
        var attacker = this.attackerDeck();
        var target = this.targetDeck();
        attacker.refreshItemCardTone();
        target.refreshItemCardTone();
        if (attacker.hp === 0) attacker.knockout();
        if (target.hp === 0) target.knockout();
        this._phase += this.judgeWinLoss() ? 2 : 1;
    };
    // update end phase, checks if Max Turn is reached
    Game_CardBattle.prototype.updateEndPhase = function() {
        this._turn = !this._turn;  // swap
        if (this._turn === this._firstAttack) this._turnCount += 1;
        if (this._turnCount === TMPlugin.Card.MaxTurn) { // enemy reaches Max Turn
            this.addMessage(3, 1);
            this.addMessage(0, '- OUT OF TIME -');
            this.addMessage(0, '\\TA[0]');
            $gameVariables.setValue(TMPlugin.Card.VNResult, 3);
            var oldValue = $gameVariables.value(TMPlugin.Card.VNTimeout); //new line
            $gameVariables.setValue(TMPlugin.Card.VNTimeout, oldValue + 1);//new line
            var oldValue = $gameVariables.value(TMPlugin.Card.VNBattleCount); //new line
            $gameVariables.setValue(TMPlugin.Card.VNBattleCount, oldValue + 1);//new line
            this._phase = 5; // proceed end of game
        } // new line >>>>>
        else if (this._playerDeck._cardturn === TMPlugin.Card.MaxCardTurn){
            this.addMessage(3, 2); // play victoryME
            this.addMessage(0, '- ASCENSION of ' + this._playerDeck.card().name() + ' -');
            this.addMessage(0, this._playerDeck.userName() + ' Wins !!');
            this.addMessage(0, '\\TA[0]');
            $gameVariables.setValue(TMPlugin.Card.VNResult, 2);
            var oldValue = $gameVariables.value(TMPlugin.Card.VNWins);//new line
            $gameVariables.setValue(TMPlugin.Card.VNWins, oldValue + 1);//new line
            var oldValue = $gameVariables.value(TMPlugin.Card.VNBattleCount); //new line
            $gameVariables.setValue(TMPlugin.Card.VNBattleCount, oldValue + 1);//new line
            // battle grade
            if (this._turnCount >= 26 && this._turnCount <= 30 ){
                $gameVariables.setValue(TMPlugin.Card.VNBattleGrade, 5);
                this.addMessage(0, '\\TA[1]BATTLE GRADE - D ');
                this.addMessage(0, '\\TA[0]'); } //new line
            if (this._turnCount >= 21 && this._turnCount <= 25 ) {
                $gameVariables.setValue(TMPlugin.Card.VNBattleGrade, 4);
                this.addMessage(0, '\\TA[1]BATTLE GRADE - C ');
                this.addMessage(0, '\\TA[0]'); } //new line
            if (this._turnCount >= 16 && this._turnCount <= 20 ) {
                $gameVariables.setValue(TMPlugin.Card.VNBattleGrade, 3);
                this.addMessage(0, '\\TA[1]BATTLE GRADE - B ');
                this.addMessage(0, '\\TA[0]'); } //new line
            if (this._turnCount >= 11 && this._turnCount <= 15 ) {
                $gameVariables.setValue(TMPlugin.Card.VNBattleGrade, 2);
                this.addMessage(0, '\\TA[1]BATTLE GRADE - A ');
                this.addMessage(0, '\\TA[0]'); } //new line
            if (this._turnCount >= 6 && this._turnCount <= 10 ) {
                $gameVariables.setValue(TMPlugin.Card.VNBattleGrade, 1);
                this.addMessage(0, '\\TA[1]BATTLE GRADE - S ');
                this.addMessage(0, '\\TA[0]'); } //new line
            if (this._turnCount >= 1 && this._turnCount <= 5 ){
                $gameVariables.setValue(TMPlugin.Card.VNBattleGrade, 0);
                this.addMessage(0, '\\TA[1]BATTLE GRADE - SS ');
                this.addMessage(0, '\\TA[0]'); } //new line
            this._phase = 5; // proceed end of game
        } else if (this._enemyDeck._cardturn === TMPlugin.Card.MaxCardTurn){
            this.addMessage(3, 1); // play defeatME
            this.addMessage(0, '- ASCENSION of ' + this._enemyDeck.card().name() + ' -');
            this.addMessage(0, 'DEFEAT');
            this.addMessage(0, '\\TA[0]');
            $gameVariables.setValue(TMPlugin.Card.VNResult, 1);
            var oldValue = $gameVariables.value(TMPlugin.Card.VNLose);//new line
            $gameVariables.setValue(TMPlugin.Card.VNLose, oldValue + 1);//new line
            var oldValue = $gameVariables.value(TMPlugin.Card.VNBattleCount); //new line
            $gameVariables.setValue(TMPlugin.Card.VNBattleCount, oldValue + 1);//new line
            this._phase = 5; // proceed end of game
        } // <<<<< end new line
        else {
            this._phase = 0; // restart phase
        }
    };

    // Skill Rebound
    // it is possible to add other states here that will proc every turn
    Game_CardBattle.prototype.updateRebound = function(attacker) {
        // attack +1 every turn
        if (attacker.isStateAffected(2) && attacker.atk < this.maxAtk) {
            attacker.gainAtk(1);
            this.addMessage(0, attacker.userName() + '\'s ' + attacker.card().name() +' has \\c[18]rage\\c[0] !' + TMPlugin.Card.ParamNames[4] + ' + 1');
        }
        // attack -1 every turn
        if (attacker.isStateAffected(3) && attacker.atk > 1) {
            attacker.gainAtk(-1);
            this.addMessage(0, attacker.userName() + '\'s ' + attacker.card().name() +' has \\c[13]curse\\c[0] ! ' + TMPlugin.Card.ParamNames[4] + ' - 1');
        }
        // hp +1 every turn
        if (attacker.isStateAffected(4)) {
            attacker.gainHp(1);
            this.addMessage(0, attacker.userName() + '\'s ' + attacker.card().name() +' has \\c[24]regen\\c[0] ! ' + TMPlugin.Card.ParamNames[3] + ' + 1');
        }
        // hp -1 every turn
        if (attacker.isStateAffected(5)) {
            attacker.gainHp(-1);
            this.addMessage(0, attacker.userName() + '\'s ' + attacker.card().name() + ' has \\c[26]poison\\c[0] ! ' + TMPlugin.Card.ParamNames[3] + ' - 1');
        }
        // 1 hp to 1 ap every turn
        if (attacker.isStateAffected(6) && attacker.hp > 1 && attacker.atk < this.maxAtk) {
            attacker.gainHp(-1);
            attacker.gainAtk(1);
            this.addMessage(0, attacker.userName() + '\'s ' + attacker.card().name() + ' has \\c[18]frenzy\\c[0] ! ' + TMPlugin.Card.ParamNames[3] + ' - 1 ' + TMPlugin.Card.ParamNames[4] + ' + 1');
        }
        // 1 ap to 1 hp every turn
        if (attacker.isStateAffected(7) && attacker.atk > 1 ) {
            attacker.gainAtk(-1);
            attacker.gainHp(1);
            this.addMessage(0, attacker.userName() + '\'s ' + attacker.card().name() + ' has \\c[13]fear\\c[0] ! ' + TMPlugin.Card.ParamNames[4] + ' - 1 ' + TMPlugin.Card.ParamNames[3] + ' + 1');
        }
    };

    // apply type bonus
    Game_CardBattle.prototype.applyTypeBonus = function(attacker, target) {
        if (this._typeBonus && $gameSystem.isTypeBonusEnabled()) {
            var a = attacker.cardType();
            var b = target.cardType();
            if ((a === 0 && b === 2) || (a === 1 && b === 0) ||
                (a === 2 && b === 1) || (a === 3 && b === 3)) {
                this._damage += 1;  // default damage 1
                this.addMessage(this._turn ? 1 : 2, TMPlugin.Card.AnimationTypeBonus);
                this.addMessage(0, '\\c[16]Type Match\\c[0] ! Damage + 1');
            }
        }
    };

    // check skill activation
    Game_CardBattle.prototype.checkSkill = function(attacker, target, active) {
        var deckSize = attacker.size();
        this.useSkill(attacker, deckSize, target, active);
        for (var i = attacker.lose; i >= 0; i--) {
            this.useSkill(attacker, i, target, active);
            if (attacker.isStateAffected(1)) break;  // skill activation invalid  -- BROKEN --
        }
        if (attacker.isItemCardReady()) {
            this.useSkill(attacker, deckSize + 1, target, active);
            this.useSkill(attacker, deckSize + 2, target, active);
        }
    };

    // judge win lose draw
    Game_CardBattle.prototype.judgeWinLoss = function() {
        if (this.isGameover()) {
            this.addMessage(0, '- ANNIHILATION -');
            this.addMessage(4, 120);
            if (this._playerDeck.lose === this._playerDeck.size() &&
                this._enemyDeck.lose === this._enemyDeck.size()) {
                this.addMessage(3, 1);
                this.addMessage(0, 'DRAW');
                $gameVariables.setValue(TMPlugin.Card.VNResult, 0);
                var oldValue = $gameVariables.value(TMPlugin.Card.VNDraw); //new line
                $gameVariables.setValue(TMPlugin.Card.VNDraw, oldValue + 1);//new line
            } else if (this._playerDeck.lose === this._playerDeck.size()) {
                this.addMessage(3, 1);  // play defeatME
                this.addMessage(0, 'DEFEAT');
                $gameVariables.setValue(TMPlugin.Card.VNResult, 1);
                var oldValue = $gameVariables.value(TMPlugin.Card.VNLose);//new line
                $gameVariables.setValue(TMPlugin.Card.VNLose, oldValue + 1);//new line
            } else {
                this.addMessage(3, 2);  // play victoryME
                this.addMessage(0, this._playerDeck.userName() + ' Wins !!');
                $gameVariables.setValue(TMPlugin.Card.VNResult, 2);
                var oldValue = $gameVariables.value(TMPlugin.Card.VNWins);//new line
                $gameVariables.setValue(TMPlugin.Card.VNWins, oldValue + 1);//new line
                this.addMessage(0, '\\TA[0]');
                // battle grade
                if (this._turnCount >= 26 && this._turnCount <= 30 ){
                    $gameVariables.setValue(TMPlugin.Card.VNBattleGrade, 5);
                    this.addMessage(0, '\\TA[1]BATTLE GRADE - D ');
                    this.addMessage(0, '\\TA[0]'); } //new line
                if (this._turnCount >= 21 && this._turnCount <= 25 ) {
                    $gameVariables.setValue(TMPlugin.Card.VNBattleGrade, 4);
                    this.addMessage(0, '\\TA[1]BATTLE GRADE - C ');
                    this.addMessage(0, '\\TA[0]'); } //new line
                if (this._turnCount >= 16 && this._turnCount <= 20 ) {
                    $gameVariables.setValue(TMPlugin.Card.VNBattleGrade, 3);
                    this.addMessage(0, '\\TA[1]BATTLE GRADE - B ');
                    this.addMessage(0, '\\TA[0]'); } //new line
                if (this._turnCount >= 11 && this._turnCount <= 15 ) {
                    $gameVariables.setValue(TMPlugin.Card.VNBattleGrade, 2);
                    this.addMessage(0, '\\TA[1]BATTLE GRADE - A ');
                    this.addMessage(0, '\\TA[0]'); } //new line
                if (this._turnCount >= 6 && this._turnCount <= 10 ) {
                    $gameVariables.setValue(TMPlugin.Card.VNBattleGrade, 1);
                    this.addMessage(0, '\\TA[1]BATTLE GRADE - S ');
                    this.addMessage(0, '\\TA[0]'); } //new line
                if (this._turnCount >= 1 && this._turnCount <= 5 ){
                    $gameVariables.setValue(TMPlugin.Card.VNBattleGrade, 0);
                    this.addMessage(0, '\\TA[1]BATTLE GRADE - SS ');
                    this.addMessage(0, '\\TA[0]'); } //new line
            }
            var oldValue = $gameVariables.value(TMPlugin.Card.VNBattleCount); //new line
            $gameVariables.setValue(TMPlugin.Card.VNBattleCount, oldValue + 1);//new line
            this.addMessage(0, '\\TA[0]');
            this._phase = 5; // proceed end of game
            return true;
        }
        return false;
    };

    // check game over
    Game_CardBattle.prototype.isGameover = function() {
        return this._playerDeck.lose === this._playerDeck.size() ||
            this._enemyDeck.lose === this._enemyDeck.size();
    };

    // add message
    Game_CardBattle.prototype.addMessage = function(type, value) {
        var message = {
            type: type,
            value: value,
            playerHp: this._playerDeck.hp,
            playerAtk: this._playerDeck.atk.clamp(1, this.maxAtk),
            enemyHp: this._enemyDeck.hp,
            enemyAtk: this._enemyDeck.atk.clamp(1, this.maxAtk),
        };
        this._messages.push(message);
    };

    // this handles message display
    Game_CardBattle.prototype.getMessage = function() {
        if (this._messages.length > 0) {
            var message = this._messages.shift();
            this._playerDeck.setDrawNumber(message.playerHp, message.playerAtk);
            this._enemyDeck.setDrawNumber(message.enemyHp, message.enemyAtk);
            switch (message.type) {
                case 1:  // play animation for player
                    this._playerDeck.card().startAnimation(message.value, false, 0);
                    break;
                case 2:  // play animation for enemy
                    this._enemyDeck.card().startAnimation(message.value, false, 0);
                    break;
                case 3:  // play ME victory defeat
                    if (message.value === 1) {
                        BattleManager.playDefeatMe();  // set DefeatME
                    } else if (message.value === 2) {
                        BattleManager.playVictoryMe(); // set VictoryME
                    }
                    BattleManager.replayBgmAndBgs();
                    break;
                case 4:
                    this._waitCount = message.value;
                    break;
                case 5:
                    if (message.value) {
                        this._playerDeck.itemCard().open();
                    } else {
                        this._enemyDeck.itemCard().open();
                    }
                    break;
                default:
                    return message.value;
            }
        }
        return null;
    };

    // card effects default 30 types
    // can only have 1 line of effect due to same variable message
    Game_CardBattle.prototype.useSkill = function(user, index, target, active) {
        var skill = user.skill(index);
        if (!skill) return;
        if (!this.meetsConditions(skill, user, index, target, active)) return;
        var effect = skill.meta.cardEffect.split(',').map(Number);
        var param = effect[1];
        if (index > user.size()) {
            userCardName = user.itemCard().name();
            this.addMessage(5, active ? this._turn : !this._turn);
        } else {
            userCardName = user.card().name();
        }
        var targetCardName = target.card().name();
        var message = null;
        switch (effect[0]) {
            case 1:	 // 相手に与えるダメージ＋○○
                this._damage = Math.max(this._damage + param, 0);
                message = 'Damage ' + (param < 0 ? '- ' : '+ ') + Math.abs(param);
                break;
            case 2:	 // 相手に与えるダメージが２倍になる
                this._damage *= 2;
                message = 'Double Damage!';
                break;
            case 3:	 // 相手から受けるダメージ＋○○
                this._damage = Math.max(this._damage + param, 0);
                message = 'Damage taken ' + (param < 0 ? '- ' : '+ ') + Math.abs(param);
                break;
            case 4:	 // 相手から受けるダメージが半分になる
                this._damage = Math.floor(this._damage / 2);
                message = 'Damage is Half';
                break;
            case 5:	 // 相手の継承スキルを無効化
                target.addState(1);
                message = targetCardName + '\'s support skills DISABLED';
                break;
            case 6:	 // enemy skip its attack phase
                this._phase = 2;
                message = targetCardName + ' was unable to attack';
                break;
            case 7:	 // 自分のHP＋○○
                user.gainHp(param);
                message = userCardName + ' ' + TMPlugin.Card.ParamNames[3] + (param < 0 ? ' - ' : ' + ') + Math.abs(param);
                break;
            case 8:	 // 自分の攻撃力＋○○
                user.gainAtk(param);
                message = userCardName + ' ' + TMPlugin.Card.ParamNames[4] + (param < 0 ? ' - ' : ' + ') + Math.abs(param);
                break;
            case 9:	 // 自分の攻撃力を○○にする
                user.gainAtk(param - user.atk);
                message = userCardName + ' ' + TMPlugin.Card.ParamNames[4] + ' ' + param;
                break;
            case 10:	// 相手のHP＋○○
                target.gainHp(param);
                message = targetCardName + ' ' + TMPlugin.Card.ParamNames[3] +
                    (param < 0 ? ' - ' : ' + ') + Math.abs(param);
                break;
            case 11:	// 相手の攻撃力＋○○
                target.gainAtk(param);
                message = targetCardName + ' ' + TMPlugin.Card.ParamNames[4] +
                    (param < 0 ? ' - ' : ' + ') + Math.abs(param);
                break;
            case 12:	// 相手の攻撃力を○○にする
                target.gainAtk(param - target.atk);
                message = targetCardName + ' ' + TMPlugin.Card.ParamNames[4] +
                    ' is now ' + param;
                break;
            case 13:	// ○○の攻撃力を最大にする ( 0 = 自分 / 1 = 相手 )
                if (param === 0) {
                    user.gainAtk(this.maxAtk - user.atk);
                    message = userCardName + ' ' + TMPlugin.Card.ParamNames[4] + ' MAXED OUT';
                } else {
                    target.gainAtk(this.maxAtk - target.atk);
                    message = targetCardName + ' ' + TMPlugin.Card.ParamNames[4] + ' MAXED OUT';
                }
                break;
            case 14:	// 自分のHP－○○、与えるダメージ＋○○
                this._damage = Math.max(this._damage + param, 0);
                user.gainHp(-param);
                message = 'Damage ' + (param < 0 ? '- ' : '+ ') + Math.abs(param) + ' / ' +
                    TMPlugin.Card.ParamNames[3] + (param < 0 ? ' + ' : ' - ') + Math.abs(param);
                break;
            case 15:	// 自分と相手の○○を入れ替える ( 0 = HP / 1 = 攻撃力 )
                if (param === 0) {
                    var tempValue = user.hp;
                    user.gainHp(target.hp - user.hp);
                    target.gainHp(tempValue - target.hp);
                    message = TMPlugin.Card.ParamNames[3] + ' SWAP';
                } else {
                    var tempValue = user.atk;
                    user.gainAtk(target.atk - user.atk);
                    target.gainAtk(tempValue - target.atk);
                    message = TMPlugin.Card.ParamNames[4] + ' SWAP';
                }
                break;
            case 16:	// 自分と相手の○○を平均化 ( 0 = HP / 1 = 攻撃力 )
                if (param === 0) {
                    var n = Math.floor((user.hp + target.hp) / 2);
                    user.gainHp(n - user.hp);
                    target.gainHp(n - target.hp);
                    message = TMPlugin.Card.ParamNames[3] + ' AVERAGE';
                } else {
                    var n = Math.floor((user.atk + target.atk) / 2);
                    user.gainAtk(n - user.atk);
                    target.gainAtk(n - target.atk);
                    message = TMPlugin.Card.ParamNames[4] + ' AVERAGE';
                }
                break;
            case 17:	// 相手に○○のダメージ
                target.gainHp(-param);
                message = targetCardName + ' takes \\c[10]' + param + ' \\c[0]damage';
                break;
            case 18:	// 自分と相手に○○のダメージ
                user.gainHp(-param);
                target.gainHp(-param);
                message = 'Both + takes \\c[10]' + param + ' \\c[0]damage';
                break;
            case 20:	// copy party skill  user.skill(i).id  changeskill (index,id)
                user.changeSkill(index, target.skill(target.lose).id);
                message = 'Copy [' + $dataSkills[target.skill(target.lose).id].name + '] skill Success!' ;
                break;
            case 21:	// 相手の継承スキルを奪う fixed order change skill , message, lose skill
                user.changeSkill(index, target.skill(target.lose).id);
                message = 'Steal [' + $dataSkills[target.skill(target.lose).id].name + '] skill Success!';
                target.changeSkill(target.lose, 0);
                break;
            case 22:	// change enemy party skill
                target.changeSkill(target.lose, param);
                message = targetCardName + ' ' + TMPlugin.Card.ParamNames[7] +
                    ' skill is now ' + $dataSkills[param].name;
                break;
            case 23:	// change enemy unique skill
                target.changeSkill(target.size(), param);
                message = targetCardName + ' ' + TMPlugin.Card.ParamNames[8] +
                    ' skill is now ' + $dataSkills[param].name;
                break;
            case 24:	// 使用済みスキルが復活する
                user.resetSkillCount();
                message = userCardName + ' ' + TMPlugin.Card.ParamNames[6] + 'count REFRESHED';
                break;
            case 25:// 以降のタイプボーナスを無効化
                if (param === 0) {
                    this._typeBonus = false;
                    message = 'Type Bonus Disabled';
                } else {
                    this._typeBonus = false;
                    message = 'Type Bonus Enabled';
                }
                break;
            case 26:	// 以降の攻撃力上限を○○にする
                this.changeMaxAtk(param);
                message = TMPlugin.Card.ParamNames[4] + ' limit is now ' + param;
                break;
            case 27:	// 以降の攻撃力上限＋○○
                this.changeMaxAtk(this.maxAtk + param);
                message = TMPlugin.Card.ParamNames[4] + ' limit ' + (param < 0 ? '- ' : '+ ') +
                    Math.abs(param);
                break;
            case 28:	// 自分の攻撃力を以降の攻撃力上限にする
                this.changeMaxAtk(user.atk);
                message = TMPlugin.Card.ParamNames[4] + ' limit is now ' + this.maxAtk;
                break;
            case 29:	// 攻撃力を１にするが、毎ターン攻撃力＋１ ( 0 = 自分 / 1 = 相手 )
                if (param === 0) {
                    user.gainAtk(1 - user.atk);
                    user.addState(2);
                    message = userCardName + ' ' + TMPlugin.Card.ParamNames[4] + ' is now 1';
                } else {
                    target.gainAtk(1 - target.atk);
                    target.addState(2);
                    message = targetCardName + ' ' + TMPlugin.Card.ParamNames[4] + ' is now 1';
                }
                break;
            case 30:	// 攻撃力を最大にするが、毎ターン攻撃力ー１ ( 0 = 自分 / 1 = 相手 )
                if (param === 0) {
                    user.gainAtk(this.maxAtk - user.atk);
                    user.addState(3);
                    message = userCardName + ' ' + TMPlugin.Card.ParamNames[4] + ' is MAX';
                } else {
                    target.gainAtk(this.maxAtk - target.atk);
                    target.addState(3);
                    message = targetCardName + ' ' + TMPlugin.Card.ParamNames[4] + 'is MAX';
                }
                break;
     // start custom skill effect
            case 31:   // gain HP equal to user AP, target HP
                if (param === 0) {
                    user.gainHp(user.atk);
                    message = userCardName + ' ' + TMPlugin.Card.ParamNames[3] + '+ ' + user.atk;
                } else if (param === 1){
                    user.gainHp(target.atk);
                    message = userCardName + ' ' + TMPlugin.Card.ParamNames[3] + '+ ' + target.atk;
                }
                else {
                    user.gainHp(this._damage);
                    message = userCardName + ' ' + TMPlugin.Card.ParamNames[3] + '+ ' + user.atk;
                }
                break;
            case 32:   // gain HP equal to enemy attack or user attack ( 0 player / 1 enemy)
                break;
            case 33:   // deal x3 damage
                this._damage *= 3;
                message = 'Triple Damage!';
                break;
            case 34:	// both take dmg based on AP
                user.gainHp(-user.atk);
                target.gainHp(-target.atk);
                message = 'Both takes damage equal to their AP!';
                break;
            case 35:   // counter user atk , reflect target dmg
                if (param === 0) {
                    target.gainHp(-user.atk);
                    message = userCardName + ' countered with \\c[10]' + user.atk + ' \\c[0]damage';
                    this._phase = 2;
                } else {
                    n = this._damage;
                    target.gainHp(-n);
                    message = userCardName + ' reflected \\c[10]' + n + ' \\c[0]damage';
                    this._phase = 2;
                }
                break;
            case 36:   // use 1 enemy AP to deal X damage
                target.gainAtk(-1);
                target.gainHp(-param);
                message = targetCardName + ' takes \\c[10]' + param + ' \\c[0]damage';
                break;
            case 37:   // lose 1 attack to gain X HP
                break;
            case 38:   // steal attack
                user.gainAtk(param);
                target.gainAtk(-param);
                message = userCardName + ' stole ' + param + ' ' + TMPlugin.Card.ParamNames[4] + ' from ' + targetCardName;
                break;
            case 39:	// DD equal to user AP
                target.gainHp(-user.atk);
                message = targetCardName + ' takes \\c[10]' + user.atk + ' \\c[0]damage';
                break;
            case 40:   // half AP HP
                if (param === 0) {
                    n = Math.round(target.hp / 2);
                    target.gainHp(n - target.hp);
                    message = targetCardName + ' HP is cut HALF!';
                } else {
                    n = Math.round(target.atk / 2);
                    target.gainAtk(n - target.atk);
                    message = targetCardName + ' AP is cut HALF!';
                }
                break;
            case 41:   // dmg + AP
                this._damage = Math.max(this._damage + user.atk, 0);
                message = 'Damage + ' + user.atk ;
                break;
            case 42:   // regen / poison
                if (param === 0) {
                    user.addState(4);
                    message = user.userName() + '\'s ' + userCardName + ' received Regen !';
                } else {
                    target.addState(5);
                    message = target.userName() + '\'s ' + targetCardName + ' acquired Poison !';
                }
                break;
            case 43: // reflect damage (0 : x1 / 1 : x2)
                break;
            case 44: // return damage (0 : x2 / 1 : x3)
                break;
            case 45: // deal damage equal to HP (O : half HP / 1 : full HP)
                if (param === 0){
                    var tempv = (user.hp / 2) - 1;
                    message = userCardName + ' sacrifices ' + tempv;
                    target.gainHp(-tempv);
                    user.gainHp(-tempv);
                    message = targetCardName + ' takes \\c[10]' + tempv + ' \\c[0]damage';
                } else {
                    var tempValue = user.hp;
                    user.gainHp(-tempValue);
                    target.gainHp(-tempValue);
                    message = userCardName + ' sacrifices ' + tempValue + ' ' + TMPlugin.Card.ParamNames[3]
                        + ' ' + targetCardName + ' takes \\c[10]' + tempValue + ' \\c[0]damage';
                }
                break;
            case 46: // evade damage
                this._damage = 0;
                message = userCardName + ' evades! No damage taken';
                break;
            case 47:	// user random skill SAGE only
                var sklrdm = [60,88,89,94,95];
                var castskill = sklrdm[Math.floor(Math.random()*sklrdm.length)];
                user.changeSkill(target.size(), castskill);
                message = userCardName + ' ' + TMPlugin.Card.ParamNames[7] +
                    ' skill is now \\c[5][' + $dataSkills[castskill].name + '] \\c[0]!';
                break;
            case 48:	// max skill count
                target.maxSkillCount();
                message = targetCardName + ' ' + TMPlugin.Card.ParamNames[6] + 'count MAXED OUT';
                break;
            case 49:	// user AP + target AP
                var sumAP = user.atk + target.atk;
                target.gainHp(-sumAP);
                message = targetCardName + ' takes \\c[10]' + sumAP + ' \\c[0]damage';
                break;
            case 50:	// roll number
                var roll = Math.floor((Math.random() * 100) +1);
                var dmgroll = Math.floor((Math.random() * param) + user.atk)
                if (roll <= param || roll >= 100 - param) {
                    message = 'Roll ' + roll + ' of 100 ! ' + targetCardName + ' takes \\c[10]' + dmgroll + ' \\c[0]damage';
                    target.gainHp(-param);
                } else {
                    message = 'Roll ' + roll + ' of 100 ! Lucked Out'
                }
                break;
            case 51:	// user AP x user HP
                sumAP = user.atk * user.hp;
                target.gainHp(-sumAP);
                message = targetCardName + ' takes \\c[10]' + sumAP + ' \\c[0]damage';
                user.gainAtk(-user.atk);
                break;
            case 52:	// multi hit 1 AP = X dmg
                sumAP = (user.atk-1)*param;
                target.gainHp(-sumAP);
                message = 'Multihit x' + (user.atk - 1) + '! '+ targetCardName + ' takes \\c[10]' + sumAP + ' \\c[0]damage';
                break;
            case 53:	// swap target HP AP, swap user AP HP ( 0 = user / 1 = target )
                if (param === 0) {
                    var tempV1 = user.hp;
                    var tempV2 = user.atk;
                    user.gainHp(tempV2 - user.hp);
                    user.gainAtk(tempV1 - user.atk);
                    message = 'AP SWAP HP : HP ' + tempV1 + ' to ' + tempV2;
                } else {
                    var tempV1 = target.hp;
                    var tempV2 = target.atk;
                    target.gainHp(tempV2 - target.hp);
                    target.gainAtk(tempV1 - target.atk);
                    message = 'AP SWAP HP : HP ' + tempV1 + ' to ' + tempV2;
                }
                break;
            case 54:   // dmg + unit cost
                n = target.cardCost();
                this._damage = Math.max(this._damage + n, 0);
                message = 'Damage + ' + n;
                break;
            case 55:	// DD equal to target AP
                target.gainHp(-target.atk);
                message = targetCardName + ' takes \\c[10]' + target.atk + ' \\c[0]damage';
                break;
            case 56:   // double AP HP
                if (param === 0) {
                    n = Math.floor(user.hp * 2);
                    user.gainHp(n - user.hp);
                    message = userCardName + ' HP is Doubled!';
                } else {
                    n = Math.round(user.atk * 2);
                    user.gainAtk(n - user.atk);
                    message = userCardName + ' AP is Doubled!';
                }
                break;
            case 57:	// remove enemy lose skill
                target.changeSkill(target.size(), 300);  // unique skill
                target.changeSkill(target.lose, 300);    // party skill
                message = targetCardName + ' \'s skills are sealed ';
                break;
            case 58:	// user AP x target HP
                sumAP = target.atk * user.hp;
                target.gainHp(-sumAP);
                message = targetCardName + ' takes \\c[10]' + sumAP + ' \\c[0]damage';
                break;
            case 59:	// advance turn count
                user._cardturn += param;
                message = userCardName + ' advances \\c[14]' + param + ' \\c[0]turns';
                break;
            case 60:	// rage
                if (param === 0) {
                    user.addState(2);
                    message = userCardName + ' ' + TMPlugin.Card.ParamNames[4] + ' enters Rage !';
                } else {
                    target.addState(2);
                    message = targetCardName + ' ' + TMPlugin.Card.ParamNames[4] + ' enters Rage !';
                }
                break;
            case 61:	// HP AP boost user
                user.gainHp(param);
                user.gainAtk(param);
                message = userCardName + ' HP + ' + param + ' AP + ' + param;
                break;
            case 62:	// (user HP - target HP) x user AP
                sumAP = Math.abs(target.atk - user.hp) * user.atk;
                target.gainHp(-sumAP);
                message = targetCardName + ' takes \\c[10]' + sumAP + ' \\c[0]damage';
                break;
            case 63:	// auto kill
                sumAP = target.hp
                target.gainHp(-target.hp);
                message = targetCardName + ' takes \\c[10]' + sumAP + ' \\c[0]damage';
                break;
            case 64:	// multi hit AP + AP
                sumAP = (target.atk + user.atk) * param;
                target.gainHp(-sumAP);
                message = 'Multihit x' + (target.atk + user.atk) + '! '+ targetCardName + ' takes \\c[10]' + sumAP + ' \\c[0]damage';
                break;
            case 65:	// random on user atk / target atk
                if (param === 0) {
                    sumAP = Math.floor((Math.random() * target.atk) + user.atk)
                    target.gainHp(-sumAP);
                    message = targetCardName + ' takes \\c[10]' + sumAP + ' \\c[0]damage';
                } else {
                    sumAP = Math.floor((Math.random() * user.atk) + target.atk)
                    target.gainHp(-sumAP);
                    message = targetCardName + ' takes \\c[10]' + sumAP + ' \\c[0]damage';
                }
                break;
            case 66:	// absorb incoming damage
                user.gainHp(this._damage);
                message = userCardName + ' absorbed with \\c[10]' + this._damage + ' \\c[0]damage';
                this._phase = 2;
                break;
            case 67:	// absorb damage dealt
                if (target.hp >= user.atk) {
                    user.gainHp(user.atk);
                    message = userCardName + ' absorbed \\c[10]' + user.atk + ' \\c[0]HP';
                } else if (target.hp < user.atk) {
                    user.gainHp(target.hp);
                    message = userCardName + ' absorbed \\c[10]' + target.hp + ' \\c[0]HP';}
                break;
            case 68:	// heads or tails
                roll = Math.round(Math.random()) + 1;
                if (roll == 1) {
                    this._damage *= 2;
                    message = 'Heads ! Double Damage';
                } else {
                    if (target.atk > 1){
                        target.gainAtk(-1);
                        message = 'Tails ! ' + targetCardName + ' lose 1 AP';
                    } else {message = 'Tails ! Nothing Happened!';
                    }
                }
                break;
            case 69:	// heads or tails
                roll = Math.round(Math.random()) + 1;
                if (roll == 1) {
                    this._damage = 0;
                    message = userCardName + ' evades! No damage taken';
                } else {
                    user.gainHp(2);
                    message = userCardName + ' HP + 2';
                }
                break;
            case 70:   // frenzy / fear
                if (param === 0) {
                    user.addState(6);
                    message = user.userName() + '\'s ' + userCardName + ' enters Frenzy !';
                } else if (param === 1) {
                    target.addState(7);
                    message = target.userName() + '\'s ' + targetCardName + ' inflicts Fear !';
                } else if (param === 2) {
                    target.addState(3);
                    message = target.userName() + '\'s ' + targetCardName + ' inflicts Curse !';
                }
                break;
            case 71:	// HP AP down target
                target.gainHp(-param);
                target.gainAtk(-param);
                message = targetCardName + ' HP - ' + param + ' AP - ' + param;
                break;
            case 72:	// max AP no penalty
                if (param === 0) {
                    user.gainAtk(this.maxAtk - user.atk);
                    message = userCardName + ' ' + TMPlugin.Card.ParamNames[4] + ' is MAX';
                } else {
                    target.gainAtk(this.maxAtk - target.atk);
                    message = targetCardName + ' ' + TMPlugin.Card.ParamNames[4] + 'is MAX';
                }
                break;
            case 73:	 // enemy skip its attack phase v2
                if (param === 0) {
                    target.gainHp(-user.atk);
                    this._phase = 2;
                    message = targetCardName + ' was unable to attack' + ' takes \\c[10]' + user.atk + ' \\c[0]damage';
                } else {
                    target.gainHp(-target.atk);
                    this._phase = 2;
                    message = targetCardName + ' was unable to attack' + ' takes \\c[10]' + target.atk + ' \\c[0]damage';
                }
                break;
        } // do not remove

        var isPlayer = active ? this._turn : !this._turn;
        this.addMessage(isPlayer ? 1 : 2, skill.animationId);
        this.addMessage(0, userCardName + '\'s \\c[5][' + skill.name + '] \\c[0]activates !');
        this.addMessage(0, message);
        user.useSkill(index);
    };

    // 発動条件のチェック
    Game_CardBattle.prototype.meetsConditions = function(skill, user, index, target, active) {
        if (!user.checkSkillCount(index)) return false;
        if (user.isSkillUsed(index)) return false;
        if (!this.meetsEffectConditions(skill, active)) return false;
        var rules = skill.meta.cardRules;
        if (rules) {
            rules = rules.split(' ');
            for (var i = 0; i < rules.length; i++) {
                var rule = rules[i].split(',').map(Number);
                var param = rule[1];
                switch (rule[0]) {
                    case 1:	// 自分のターンの○○フェイズ
                        if (!active || this._phase !== param) return false;
                        break;
                    case 2:	// 相手のターンの○○フェイズ
                        if (active || this._phase !== param) return false;
                        break;
                    case 3:	 // ターン指定
                        if (user.turnCount !== param) return false;
                        break;
                    case 4:	 // 相手が○○タイプ
                        if (param === -1 && user.cardType() === target.cardType()) return false;
                        if (param === -2 && user.cardType() !== target.cardType()) return false;
                        if (param >= 0 && target.cardType() !== param) return false;
                        break;
                    case 5:	 // 相手が○○属性
                        if (param === -1 && user.cardElement() === target.cardElement()) return false;
                        if (param === -2 && user.cardElement() !== target.cardElement()) return false;
                        if (param >= 0 && target.cardElement() !== param) return false;
                        break;
                    case 6:	 // 相手の稀少度が○○
                        if (param === -1 && user.cardRare() === target.cardRare()) return false;
                        if (param === -2 && user.cardRare() !== target.cardRare()) return false;
                        if (param >= 0 && target.cardRare() !== param) return false;
                        break;
                    case 7:	 // 相手のポジションが○○
                        if (target.lose !== param) return false;
                        break;
                    case 8:	 // 相手のHPが○○以上
                        if (target.hp < param) return false;
                        break;
                    case 9:	 // 相手のHPが○○以下
                        if (target.hp > param) return false;
                        break;
                    case 10:	// 相手のHPが○○になった
                        if (target.hp !== param) return false;
                        break;
                    case 11:	// 相手のHPが○○ ( 0 = 偶数 / 1 = 奇数 )
                        if (target.hp % 2 !== param) return false;
                        break;
                    case 12:	// 相手の攻撃力が○○以上
                        if (target.atk < param) return false;
                        break;
                    case 13:	// 相手の攻撃力が○○以下
                        if (target.atk > param) return false;
                        break;
                    case 14:	// 相手の攻撃力が○○になった
                        if (target.atk !== param) return false;
                        break;
                    case 15:	// 相手の攻撃力が○○ ( 0 = 偶数 / 1 = 奇数)
                        if (target.atk % 2 !== param) return false;
                        break;
                    case 16:	// 自分が○○タイプ
                        if (user.cardType() !== param) return false;
                        break;
                    case 17:	// 自分が○○属性
                        if (user.cardElement() !== param) return false;
                        break;
                    case 18:	// 自分の稀少度が○○
                        if (user.cardRare() !== param) return false;
                        break;
                    case 19:	// 自分のポジションが○○
                        if (user.lose !== param) return false;
                        break;
                    case 20:	// 自分のHPが○○以上
                        if (user.hp < param) return false;
                        break;
                    case 21:	// 自分のHPが○○以下
                        if (user.hp > param) return false;
                        break;
                    case 22:	// 自分のHPが○○になった
                        if (user.hp !== param) return false;
                        break;
                    case 23:	// 自分のHPが○○ ( 0 = 偶数 / 1 = 奇数)
                        if (user.hp % 2 !== param) return false;
                        break;
                    case 24:	// 自分の攻撃力が○○以上
                        if (user.atk < param) return false;
                        break;
                    case 25:	// 自分の攻撃力が○○以下
                        if (user.atk > param) return false;
                        break;
                    case 26:	// 自分の攻撃力が○○になった
                        if (user.atk !== param) return false;
                        break;
                    case 27:	// 自分の攻撃力が○○ ( 0 = 偶数 / 1 = 奇数)
                        if (user.atk % 2 !== param) return false;
                        break;
                    case 28:	// 自分が○○を継承している
                        var result = false;
                        for (var i = 0; i <= index; i++) {
                            if (user.skill(i).id === param) result = true;
                        }
                        if (!result) return false;
                        break;
                    case 29:	// your cost is lower
                        if (user.cardCost() >= target.cardCost()) return false;
                        break;
                    case 30:	// your cost is higher
                        if (user.cardCost() <= target.cardCost()) return false;
                        break;
                    case 31:	// 自分のカードタイプが統一されている
                        for (var i = 0; i < user.size(); i++) {
                            if (user.card(i).type() !== user.cardType()) return false;
                        }
                        break;
                    case 32:	// 自分のデッキのカード属性が統一されている
                        for (var i = 0; i < user.size(); i++) {
                            if (user.card(i).element() !== user.cardElement()) return false;
                        }
                        break;
                    case 33:	// 自分のデッキの合計コストが○○以上
                        if (user.cost() < param) return false;
                        break;
                    case 34:	// 自分のデッキの合計コストが○○以下
                        if (user.cost() > param) return false;
                        break;
        // -- custom skill conditions --
                    case 35:	// user has greater hp
                        if (user.hp < target.hp) return false;
                        break;
                    case 36:	// user has lesser hp
                        if (user.hp > target.hp) return false;
                        break;
                    case 37:	// user and target has same hp
                        result = false;
                        if (user.hp === target.hp) result = true;
                        if (!result)  return false;
                        break;
                    case 38:	// user has greater atk
                        if (user.atk < target.atk) return false;
                        break;
                    case 39:	// user has lesser atk
                        if (user.atk > target.atk) return false;
                        break;
                    case 40:	// user has greater atk
                        result = false;
                        if (user.atk === target.atk) result = true;
                        if (!result) return false;
                        break;
                    case 41:	 // turn odd or even
                        if (user.turnCount % 2 !== param) return false;
                        break;
                    case 42:	 // every 3 turns
                        result = false;
                        if (user.turnCount % 3 === 0) result = true;
                        if (!result)  return false;
                        break;
                    case 43:	 // every 4 turns
                        result = false;
                        if (user.turnCount % 4 === 0) result = true;
                        if (!result)  return false;
                        break;
                    case 44:	 // every 4 turns
                        result = false;
                        if (user.turnCount % 5 === 0) result = true;
                        if (!result)  return false;
                        break;
                    case 45:	// card cost
                        result = false;
                        if (target.cardCost() === param) result = true;
                        if (!result) return false;
                        break;
                    case 46:	// card turn less
                        //result = false;
                        if (user.cardturn >= param) return false;
                        //if (!result)  return false;
                        break;
                    case 47:	// card turn more
                        //result = false;
                        if (user.cardturn <= param) return false;
                        //if (!result)  return false;
                        break;
                    case 48:	// type unity is ?
                        for (var i = 0; i < user.size(); i++) {
                            if (user.card(i).type() !== param) return false;
                        }
                        break;
                    case 49:	// element unity is ?
                        for (var i = 0; i < user.size(); i++) {
                            if (user.card(i).element() !== param) return false;
                        }
                        break;
                    case 50:	// user less max AP
                        if (user.atk > this.maxAtk) return false;
                        break;
                    case 51:	// target less max AP
                        if (target.atk > this.maxAtk) return false;
                        break;
                    case 52:	// VS type unity
                        for (var i = 0; i < target.size(); i++) {
                            if (target.card(i).type() !== target.cardType()) return false;
                        }
                        break;
                    case 53:	// VS element unity
                        for (var i = 0; i < target.size(); i++) {
                            if (target.card(i).element() !== target.cardElement()) return false;
                        }
                        break;
                    case 54:	// cost below / equal
                        if (user.cardCost() >= param) return false;
                        break;
                    case 55:	// cost above/ equal
                        if (user.cardCost() <= param) return false;
                        break;
                    case 56:	// type unity is ?
                        for (var i = 0; i < user.size(); i++) {
                            if (target.card(i).type() !== param) return false;
                        }
                        break;
                    case 57:	// element unity is ?
                        for (var i = 0; i < user.size(); i++) {
                            if (target.card(i).element() !== param) return false;
                        }
                        break;
                    case 58:	// target is alive
                        if (target.hp === 0) return false;
                        break;
                    case 59:	// user is alive
                        if (user.hp === 0) return false;
                        break;
                }
            }
        }
        return true;
    };

    // timing of effect conditions
    Game_CardBattle.prototype.meetsEffectConditions = function(skill, active) {
        if (!skill.meta.cardEffect) return false;
        var effect = skill.meta.cardEffect.split(',').map(Number);
            // skills that increase user damage
        if ([1, 2, 14, 33, 41, 54].contains(effect[0])) {
            return active && this._phase === 1;
            // skills that activate on target attack phase
        } else if ([3, 4, 31, 35, 46, 66, 73].contains(effect[0])) {
            return !active && this._phase === 1;
            // skills that  skips target attack phase
        } else if ([6].contains(effect[0])) {
            return !active && this._phase === 0;
            // skills that reduce user HP
        } else if ([17, 18].contains(effect[0])) {
            return active && this._phase === 0;
        }
        return true;
    };

    var $gameCardBattle = new Game_CardBattle();

    //-----------------------------------------------------------------------------
    // Game_Deck
    //

    function Game_Deck() {
        this.initialize.apply(this, arguments);
    }

    Object.defineProperties(Game_Deck.prototype, {
        lose: { get: function() { return this._lose; }, configurable: true },
        turnCount: { get: function() { return this._turnCount; }, configurable: true },
        chargeTime: { get: function() { return this._chargeTime; }, configurable: true },
        hp: { get: function() { return this._hp; }, configurable: true },
        atk: { get: function() { return this._atk; }, configurable: true },
        hpDraw: { get: function() { return this._hpDraw; }, configurable: true },
        atkDraw: { get: function() { return this._atkDraw; }, configurable: true },
        cardturn: { get: function() { return this._cardturn; }, configurable: true },
    });

    Game_Deck.prototype.initialize = function(userName, itemCardId, cardIds) {
        this._userName = userName;
        this._itemCardId = itemCardId;
        this._cardIds = cardIds;
        this.initMembers();
        this.initCardStatus();
        this.initCardPositions();
    };

    Game_Deck.prototype.initMembers = function() {
        this._lose = 0;
        this._cost = 0;
        this._cardturn = 0; // new line
        this._cards = [];
        this._skills = [];
        this._skillCount = [];
        this._usedSkills = [];
        this._chargeTime = 0;
        for (var i = 0; i < this._cardIds.length; i++) {
            if (this._cardIds[i] === 0) continue;
            var card = new Game_Card(this._cardIds[i]);
            var index = this._cards.length;
            if (index > 0) card.setScale(0.5, 0.5);
            this._cards.push(card);
            this._skills.push(card.partySkill());
            this._skillCount.push(0);
            this._cost += card.cost();
        }
        this._skills.push(null);
        this._skillCount.push(0);
        if (this._itemCardId !== 0) {
            this._itemCard = new Game_Card(this._itemCardId);
            this._itemCard.setScale(0.5, 0.5);
            this._skills.push(this._itemCard.unitSkill());
            this._skills.push(this._itemCard.partySkill());
            this._skillCount.push(0);
            this._skillCount.push(0);
            this._cost += this._itemCard.cost();
        }
        this._hpDraw = 0;
        this._atkDraw = 0;
    };

    Game_Deck.prototype.initCardStatus = function() {
        this._turnCount = 0;
        this._states = [];
        var card = this.card();
        this._hp = card.hp();
        this._atk = card.atk().clamp(1, $gameCardBattle.maxAtk);
        this._skills[this.size()] = card.unitSkill();
    };

    Game_Deck.prototype.initCardPositions = function() {
        for (var i = 0; i < this.size(); i++) {
            this.card(i).setPosition(TMPlugin.Card.PlayerCardPositions[i][0],
                TMPlugin.Card.PlayerCardPositions[i][1])
        }
        if (this._itemCard) {
            this._itemCard.setPosition(TMPlugin.Card.PlayerItemCardPosition[0],
                TMPlugin.Card.PlayerItemCardPosition[1])
        }
    };

    // initialize start of turn
    Game_Deck.prototype.initTurnStart = function() {
        this._usedSkills = [];
        this._turnCount += 1;
        this._cardturn += 1; // new line
        this.decreaseChargeTime();
    };

    Game_Deck.prototype.decreaseChargeTime = function() {
        if (this._chargeTime > 0) {
            this._chargeTime -= 1;
            if (this._chargeTime === 0) this.refreshItemCardTone();
        }
    };

    Game_Deck.prototype.refreshItemCardTone = function() {
        if (!this._itemCard) return;
        var value = this.isItemCardReady() ? 0 : 255;
        this._itemCard.changeColorToneGray(value);
    };

    // card is defeated
    Game_Deck.prototype.knockout = function() {
        this.card().changeColorToneGray(255);
        this._lose += 1; // swap next card
        this._cardturn = 0; // new line
        if (this._lose < this.size()) this.setNextCard();
    };

    // set next card draw HP atk
    Game_Deck.prototype.setNextCard = function() {
        this.initCardStatus();
        this.resetSkillCount();
        this.refreshCardPositions();
        this._hpDraw = this._hp;
        this._atkDraw = this._atk;
    };

    // カードの位置をリフレッシュ
    Game_Deck.prototype.refreshCardPositions = function() {
        var size = this.size();
        for (var i = 0; i < size; i++) {
            var index = (i - this._lose + size) % size;
            var x = TMPlugin.Card.PlayerCardPositions[index][0];
            var y = TMPlugin.Card.PlayerCardPositions[index][1];
            var scale = index === 0 ? 1.0 : 0.5;
            this.card(i).setMove(x, y, scale, scale);
        }
    };

    Game_Deck.prototype.isAnyCardShaked = function() {
        return this._cards.some(function(card) {
            return card.isShaking();
        });
    };

    Game_Deck.prototype.gainHp = function(value) {
        this._hp = Math.max(this._hp + value, 0);
    };

    Game_Deck.prototype.gainAtk = function(value) {
        this._atk += value;
        this._atk = this._atk.clamp(0, $gameCardBattle.maxAtk);
    };

    // 状態の付加
    Game_Deck.prototype.addState = function(stateId) {
        this._states.push(stateId);
    };

    // 指定した状態が付加されているかを返す
    Game_Deck.prototype.isStateAffected = function(stateId) {
        return this._states.contains(stateId);
    };

    Game_Deck.prototype.setDrawNumber = function(hpDraw, atkDraw) {
        if (this._hpDraw > hpDraw) this.card().shake();
        this._hpDraw = hpDraw;
        this._atkDraw = atkDraw;
    };

    // スキル使用回数のリセット
    Game_Deck.prototype.resetSkillCount = function() {
        for (var i = 0; i <= this.size(); i++) {
            this._skillCount[i] = 0;
        }
    };
    // new line max repeat skill count
    Game_Deck.prototype.maxSkillCount = function() {
        for (var i = 0; i <= this.size(); i++) {
            this._skillCount[i] = $dataSkills[this._skills[i]].meta.cardRepeats;
        }
    };
    // 指定したスキルの使用回数が残っているかを返す
    Game_Deck.prototype.checkSkillCount = function(index) {
        var skill = $dataSkills[this._skills[index]];
        var maxCount = skill.meta.cardRepeats ? +skill.meta.cardRepeats : 0;
        return this._skillCount[index] < maxCount;
    };

    // 指定したスキルがターン内に使用済みかどうかを返す
    Game_Deck.prototype.isSkillUsed = function(index) {
        return this._usedSkills[index];
    };

    // change skill reference copy skill, steal skill
    Game_Deck.prototype.changeSkill = function(index, skillId) {
        this._skills[index] = skillId;
    };

    // スキル使用による後処理
    Game_Deck.prototype.useSkill = function(index) {
        if (index > this.size()) {
            this._chargeTime = this.itemCard().hp() + 1;
        }
        this._skillCount[index] += 1;
        this._usedSkills[index] = true;
    };

    // アイテムカードが発動可能かどうかを返す
    Game_Deck.prototype.isItemCardReady = function() {
        if (this._itemCardId === 0) return false;
        return this._chargeTime === 0;
    };

    // ユーザー名を返す
    Game_Deck.prototype.userName = function() {
        return this._userName;
    };

    // デッキサイズを返す
    Game_Deck.prototype.size = function() {
        return this._cards.length;
    };

    // デッキの合計コスト値を返す
    Game_Deck.prototype.cost = function() {
        return this._cost;
    };

    // 指定したインデックスのスキルオブジェクトを返す
    Game_Deck.prototype.skill = function(index) {
        return $dataSkills[this._skills[index]];
    };

    // 指定したカードを返す
    Game_Deck.prototype.card = function(index) {
        if (index == null) index = this._lose;
        return this._cards[index];
    };

    // アイテムカードを返す
    Game_Deck.prototype.itemCard = function() {
        return this._itemCard;
    };

    // カードのコスト値を返す
    Game_Deck.prototype.cardCost = function(index) {
        return this.card(index).cost();
    };

    // カードのタイプ値を返す
    Game_Deck.prototype.cardType = function(index) {
        return this.card(index).type();
    };

    // カードの属性値を返す
    Game_Deck.prototype.cardElement = function(index) {
        return this.card(index).element();
    };

    // カードの稀少度を返す
    Game_Deck.prototype.cardRare = function(index) {
        return this.card(index).rare();
    };

    Game_Deck.prototype.update = function() {
        for (var i = 0; i < this.size(); i++) {
            this.card(i).update();
        }
    };

    //-----------------------------------------------------------------------------
    // Game_EnemyDeck
    //

    function Game_EnemyDeck() {
        this.initialize.apply(this, arguments);
    }

    Game_EnemyDeck.prototype = Object.create(Game_Deck.prototype);
    Game_EnemyDeck.prototype.constructor = Game_EnemyDeck;

    Game_EnemyDeck.prototype.initialize = function(userName, itemCardId, cardIds) {
        Game_Deck.prototype.initialize.call(this, userName, itemCardId, cardIds);
    };

    Game_EnemyDeck.prototype.initCardPositions = function() {
        for (var i = 0; i < this.size(); i++) {
            this.card(i).setPosition(TMPlugin.Card.EnemyCardPositions[i][0],
                TMPlugin.Card.EnemyCardPositions[i][1])
        }
        if (this._itemCard) {
            this._itemCard.setPosition(TMPlugin.Card.EnemyItemCardPosition[0],
                TMPlugin.Card.EnemyItemCardPosition[1])
        }
    };

    // カードの位置をリフレッシュ
    Game_EnemyDeck.prototype.refreshCardPositions = function() {
        var size = this.size();
        for (var i = 0; i < size; i++) {
            var index = (i - this._lose + size) % size;
            var x = TMPlugin.Card.EnemyCardPositions[index][0];
            var y = TMPlugin.Card.EnemyCardPositions[index][1];
            var scale = index === 0 ? 1.0 : 0.5;
            this.card(i).setMove(x, y, scale, scale);
        }
    };

    //-----------------------------------------------------------------------------
    // Game_Card
    // this draws the cards as one bitmap

    function Game_Card() {
        this.initialize.apply(this, arguments);
    }

    Game_Card.prototype.initialize = function(cardId) {
        this._cardId = Math.abs(cardId);
        this._item = $dataItems[this._cardId];
        this._hide = cardId < 0;
        this.initMembers();
    };

    Game_Card.prototype.initMembers = function() {
        this._x = 0;
        this._y = 0;
        this._shiftX = 0;
        this._scaleX = 1.0;
        this._scaleY = 1.0;
        this._shakeX = 0;
        this._shakeAngle = 0.0;
        this._moveCount = 64;
        this._targetPosition = [0, 0, 1.0, 1.0];
        this._lastPosition = [0, 0, 1.0, 1.0];
        this._animations = [];
        this._colorToneGray = 0;
    };

    Game_Card.prototype.isAnimationRequested = function() {
        return this._animations.length > 0;
    };

    Game_Card.prototype.shiftAnimation = function() {
        return this._animations.shift();
    };

    Game_Card.prototype.startAnimation = function(animationId, mirror, delay) {
        var data = { animationId: animationId, mirror: mirror, delay: delay };
        this._animations.push(data);
    };

    // set position
    Game_Card.prototype.setPosition = function(x, y) {
        var xx = (Graphics.width - 816) / 2 // new line
        this._x = x + xx; // editted line
        this._y = y;
        this._targetPosition[0] = x;
        this._targetPosition[1] = y;
    };

    // 拡大率の変更
    Game_Card.prototype.setScale = function(scaleX, scaleY) {
        this._scaleX = scaleX;
        this._scaleY = scaleY;
        this._targetPosition[2] = scaleX;
        this._targetPosition[3] = scaleY;
    };

    // set Move
    Game_Card.prototype.setMove = function(x, y, scaleX, scaleY) {
        var xx = (Graphics.width - 816) / 2 // new line
        this._lastPosition = [this._x + xx, this._y, this._scaleX, this._scaleY]; // editted line
        this._targetPosition = [x - this._x, y - this._y,
            scaleX - this._scaleX, scaleY - this._scaleY];
        this._moveCount = 0;
    };

    // 揺らす
    Game_Card.prototype.shake = function() {
        this._shakeX = 32;
        this._shakeAngle = 0.0;
    };

    // 揺れているかどうかを返す
    Game_Card.prototype.isShaking = function() {
        return this._shakeX > 0;
    };

    Game_Card.prototype.screenX = function() {
        return this._x + this._shiftX;
    };

    Game_Card.prototype.screenY = function() {
        return this._y;
    };

    Game_Card.prototype.scaleX = function() {
        return this._scaleX;
    };

    Game_Card.prototype.scaleY = function() {
        return this._scaleY;
    };

    Game_Card.prototype.isHiding = function() {
        return this._hide;
    };

    Game_Card.prototype.open = function() {
        this._hide = false;
    };

    Game_Card.prototype.colorToneGray = function() {
        return this._colorToneGray;
    };

    Game_Card.prototype.changeColorToneGray = function(colorToneGray) {
        this._colorToneGray = colorToneGray;
    };

    Game_Card.prototype.fileName = function() {
        return this._item.meta.cardImage || 'card_' + this._cardId;
    };

    Game_Card.prototype.id = function() {
        return this._cardId;
    };

    Game_Card.prototype.name = function() {
        return this._item ? this._item.name : '';
    };

    Game_Card.prototype.cost = function() {
        return this._item ? +this._item.meta.cardCost : 0;
    };

    Game_Card.prototype.hp = function() {
        return this._item ? +this._item.meta.cardHp : 0;
    };

    Game_Card.prototype.atk = function() {
        return this._item ? +this._item.meta.cardAtk : 0;
    };

    Game_Card.prototype.type = function() {
        return this._item ? +this._item.meta.cardType : 0;
    };

    Game_Card.prototype.element = function() {
        return this._item ? +this._item.meta.cardElement : 0;
    };

    Game_Card.prototype.rare = function() {
        return this._item ? +this._item.meta.cardRare : 0;
    };

    Game_Card.prototype.unitSkill = function() {
        return this._item ? +this._item.meta.unitSkill : 0;
    };

    Game_Card.prototype.partySkill = function() {
        return this._item ? +this._item.meta.partySkill : 0;
    };

    Game_Card.prototype.attackAnimation = function() {
        return this._item ? +this._item.meta.cardAttackAnimation : 0;
    };

    Game_Card.prototype.update = function() {
        if (this.isShaking()) {
            this._shakeAngle += 0.7;
            this._shakeX -= 1;
            this._shiftX = Math.floor(Math.cos(this._shakeAngle) * this._shakeX);
        }
        if (this._moveCount < 64) {
            this._moveCount += 4;
            var d = Math.sin(this._moveCount * Math.PI / 128);
            this._x = this._lastPosition[0] + d * this._targetPosition[0];
            this._y = this._lastPosition[1] + d * this._targetPosition[1];
            this._scaleX = this._lastPosition[2] + d * this._targetPosition[2];
            this._scaleY = this._lastPosition[3] + d * this._targetPosition[3];
        }
    };

    //-----------------------------------------------------------------------------
    // Game_Interpreter
    //

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'startCardBattle') {
            var arr = args.map(this.convertEscapeCharactersTM, this);
            var enemyName = arr[0];
            var enemyItemCardId = +arr[1];
            var enemyCardIds = arr[2].split(',').map(Number);
            SceneManager.push(Scene_CardBattle);
            SceneManager.prepareNextScene(enemyName, enemyItemCardId, enemyCardIds);
        } else if (command === 'startDeckSelect') {
            var arr = args.map(this.convertEscapeCharactersTM, this);
            var enemyName = arr[0];
            var enemyItemCardId = +arr[1];
            var enemyCardIds = arr[2].split(',').map(Number);
            SceneManager.push(Scene_DeckSelect);
            SceneManager.prepareNextScene(enemyName, enemyItemCardId, enemyCardIds);
        }  else if (command === 'isDeckReady') {
            var arr = args.map(this.convertEscapeCharactersTM, this);
            $gameSwitches.setValue(arr[0], $gameParty.isDeckReady());
        } else if (command === 'startDeckEdit') {
            SceneManager.push(Scene_DeckEdit);
        } else if (command === 'disableTypeBonus') {
            $gameSystem.setTypeBonusEnabled(false);
        } else if (command === 'enableTypeBonus') {
            $gameSystem.setTypeBonusEnabled(true);
        }
    };

    //-----------------------------------------------------------------------------
    // Sprite_Card
    //

    function Sprite_Card() {
        this.initialize.apply(this, arguments);
    }

    Sprite_Card.prototype = Object.create(Sprite_Base.prototype);
    Sprite_Card.prototype.constructor = Sprite_Card;

    Sprite_Card.prototype.initialize = function(card) {
        Sprite_Base.prototype.initialize.call(this);
        this.bitmap = new Bitmap(192, 288);
        this.bitmap.smooth = true;
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this._hide = card.isHiding();
        this.setCard(card);
    };

    Sprite_Card.prototype.initMembers = function() {
        this._colorToneGray = 0;
    };

    Sprite_Card.prototype.setCard = function(card) {
        this._card = card;
        this.initMembers();
        this.loadCardBitmap();
    };

    Sprite_Card.prototype.loadCardBitmap = function() {
        if (this._hide || this._card.id() === 0) {
            this._cardBitmap = ImageManager.loadPicture('card_0');
        } else {
            this._cardBitmap	= ImageManager.loadPicture(this._card.fileName());
            if (TMPlugin.Card.UseAutoText) {
                if (this._card.type() === 4) {
                    this._backBitmap	= ImageManager.loadPicture('c_back_i');
                    this._frameBitmap = ImageManager.loadPicture('c_frame_i');
                } else {
                    this._backBitmap	= ImageManager.loadPicture('c_back_' + this._card.type());
                    this._frameBitmap = ImageManager.loadPicture('c_frame_' + this._card.element());
                }
                this._rareBitmap	= ImageManager.loadPicture('c_rare_' + this._card.rare());
            }
        }
        this._bitmapLoading = true;
    };
    /* this handles the Auto Text layout
       adjusted icon spacing, font style instert
       cards are not reproduced rather stacked back card frame rare
       additional layer should be hologram*/
    Sprite_Card.prototype.createCardBitmap = function() {
        this.bitmap.clear();
        if (!this._hide && this._card.id() > 0 && TMPlugin.Card.UseAutoText) {
            this.bitmap.blt(this._backBitmap, 0, 0, 192, 288, 0, 0);
            this.bitmap.blt(this._cardBitmap, 0, 0, 192, 288, 0, 0);
            this.bitmap.blt(this._frameBitmap, 0, 0, 192, 288, 0, 0);
            this.bitmap.blt(this._rareBitmap, 0, 0, 192, 288, 0, 0);
            this.drawIcon(TMPlugin.Card.TypeIcons[this._card.type()], 6, 4, 32, 32);  // draw icon type default 24 x 24
            for (var i = 0; i < this._card.cost(); i++) {
                this.drawIcon(TMPlugin.Card.CostIcon, 158, i * TMPlugin.Card.CostIconSpace + 36, 24, 24); // editted line
            }
            this.bitmap.fontSize = 18;
            this.bitmap.fontFace = TMPlugin.Card.FontCardName; // new line  Font card name
            this.bitmap.textColor = '#000000';
            this.bitmap.outlineWidth = 2;
            this.bitmap.outlineColor = '#ffffff';
            this.bitmap.drawText(this._card.name(), 40, 10, 152, 24, 'left');
            var unitSkill = $dataSkills[this._card.unitSkill()];
            if (unitSkill) {
                this.drawIcon(unitSkill.iconIndex, 12, 226, 24, 24); // draw icon
                this.bitmap.drawText(unitSkill.name, 40, 226, 152, 24, 'left'); //editted line
            }
            var partySkill = $dataSkills[this._card.partySkill()];
            if (partySkill) {
                this.drawIcon(partySkill.iconIndex, 12, 254, 24, 24); // draw icon
                this.bitmap.drawText(partySkill.name, 40, 254, 152, 24, 'left'); //editted line
            }
            this.bitmap.fontSize = 28;
            this.bitmap.fontFace = TMPlugin.Card.FontCardNumber; // new line font card hp attack
            this.bitmap.drawText(this._card.hp(), 10, 182, 48, 32, 'center');
            if (this._card.type() < 4) {
                this.bitmap.drawText(this._card.atk(), 134, 182, 48, 32, 'center');
            }
        } else {
            this.bitmap.blt(this._cardBitmap, 0, 0, 192, 288, 0, 0);
        }
        this._bitmapLoading = false;
    };

    Sprite_Card.prototype.drawIcon = function(iconIndex, x, y, width, height) {
        var bitmap = ImageManager.loadSystem('IconSet');
        var pw = Window_Base._iconWidth;
        var ph = Window_Base._iconHeight;
        var sx = iconIndex % 16 * pw;
        var sy = Math.floor(iconIndex / 16) * ph;
        this.bitmap.blt(bitmap, sx, sy, pw, ph, x, y, width, height);
    };

    // おもてにする
    Sprite_Card.prototype.open = function() {
        this._hide = false;
        this.loadCardBitmap();
    };

    Sprite_Card.prototype.update = function() {
        Sprite_Base.prototype.update.call(this);
        if (this._bitmapLoading && ImageManager.isReady()) {
            this.createCardBitmap();
        }
        this.x = this._card.screenX();
        this.y = this._card.screenY();
        this.scale.x = this._card.scaleX();
        this.scale.y = this._card.scaleY();
        if (this._hide && !this._card.isHiding()) this.open();
        this.updateAnimation();
        this.updateColorTone();
    };

    Sprite_Card.prototype.updateAnimation = function() {
        this.setupAnimation();
    };

    Sprite_Card.prototype.setupAnimation = function() {
        while (this._card.isAnimationRequested()) {
            var data = this._card.shiftAnimation();
            var animation = $dataAnimations[data.animationId];
            var mirror = data.mirror;
            var delay = animation.position === 3 ? 0 : data.delay;
            this.startAnimation(animation, mirror, delay);
            for (var i = 0; i < this._animationSprites.length; i++) {
                var sprite = this._animationSprites[i];
            }
        }
    };

    Sprite_Card.prototype.updateColorTone = function() {
        if (this._colorToneGray !== this._card.colorToneGray()) {
            this._colorToneGray = this._card.colorToneGray();
            this.setColorTone([0, 0, 0, this._colorToneGray]);
        }
    };

    Sprite_Card.prototype.isGray = function() {
        return this._colorToneGray === 255;
    };

    //-----------------------------------------------------------------------------
    // Sprite_Number
    //

    function Sprite_Number() {
        this.initialize.apply(this, arguments);
    }

    Sprite_Number.prototype = Object.create(Sprite.prototype);
    Sprite_Number.prototype.constructor = Sprite_Number;

    Sprite_Number.prototype.initialize = function(x, y, width, height, fontSize,
                                                  textColor, outlineWidth, outlineColor) {
        Sprite.prototype.initialize.call(this);
        this.bitmap = new Bitmap(width, height);
        this.bitmap.fontSize = fontSize;
        this.bitmap.fontFace = TMPlugin.Card.FontSpriteNumber; // new line font sprite number
        this.bitmap.textColor = textColor;
        this.bitmap.outlineWidth = outlineWidth;
        this.bitmap.outlineColor = outlineColor;
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this.x = x;
        this.y = y;
        this._currentNumber = 0;
        this._newNumber = 0;
        this._waitCount = 0;
        this.refresh();
    };

    Sprite_Number.prototype.setNumber = function(value) {
        if (this._newNumber !== value) {
            this._newNumber = value;
            this.updateNumber();
        }
    };

    Sprite_Number.prototype.update = function() {
        Sprite.prototype.update.call(this);
        if (this._waitCount > 0) {
            this._waitCount -= 1;
        } else {
            this.updateNumber();
        }
    };

    Sprite_Number.prototype.updateNumber = function() {
        if (this._currentNumber !== this._newNumber) {
            if (this._currentNumber < this._newNumber) {
                this._currentNumber += 1;
            } else {
                this._currentNumber -= 1;
            }
            this.refresh();
            this._waitCount = 3;
        }
    };

    Sprite_Number.prototype.refresh = function() {
        this.bitmap.clear();
        var width = this.bitmap.width;
        var height = this.bitmap.height;
        this.bitmap.drawText(this._currentNumber + '', 0, 0, width, height, 'center');
    };

    //-----------------------------------------------------------------------------
    // Sprite_TurnCursor
    //

    function Sprite_TurnCursor() {
        this.initialize.apply(this, arguments);
    }

    Sprite_TurnCursor.prototype = Object.create(Sprite.prototype);
    Sprite_TurnCursor.prototype.constructor = Sprite_TurnCursor;

    Sprite_TurnCursor.prototype.initialize = function() {
        Sprite.prototype.initialize.call(this);
        this.bitmap = ImageManager.loadPicture('c_cursor');
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this._turn = null;
        var x = TMPlugin.Card.NumberPositions[0][0] +
            (TMPlugin.Card.NumberPositions[2][0] - TMPlugin.Card.NumberPositions[0][0]) / 2;
        var y = TMPlugin.Card.NumberPositions[0][1] +
            (TMPlugin.Card.NumberPositions[2][1] - TMPlugin.Card.NumberPositions[0][1]) / 2;
        this.move(x, y);
        this._lastPosition = [this.x, this.y];
        this._targetPosition = [this.x, this.y];
        this._moveCount = 8;
        this._scaleCount = 0;
    };

    Sprite_TurnCursor.prototype.update = function() {
        this.rotation += 0.02;
        this._scaleCount += 1;
        if (this._scaleCount >= 240) this._scaleCount = 0;
        this.scale.x = Math.sin(Math.PI * this._scaleCount / 120) * 0.2 + 1.0;
        this.scale.y = this.scale.x;
        if (this._turn !== $gameCardBattle.turn) {
            this._turn = $gameCardBattle.turn;
            this.setMove.apply(this, TMPlugin.Card.NumberPositions[this._turn ? 0 : 2]);
        }
        if (this._moveCount < 8) {
            this._moveCount += 1;
            var d = Math.sin(this._moveCount * Math.PI / 16);
            this.x = this._lastPosition[0] + d * this._targetPosition[0];
            this.y = this._lastPosition[1] + d * this._targetPosition[1];
        }
    };

    Sprite_TurnCursor.prototype.setMove = function(x, y) {
        var xx = (Graphics.width - 816) / 2 // new line
        this._lastPosition = [this.x + xx, this.y]; // editted line
        this._targetPosition = [x - this.x, y - this.y];
        this._moveCount = 0;
    };

    //-----------------------------------------------------------------------------
    // Spriteset_CardBattle
    //

    function Spriteset_CardBattle() {
        this.initialize.apply(this, arguments);
    }

    Spriteset_CardBattle.prototype = Object.create(Spriteset_Base.prototype);
    Spriteset_CardBattle.prototype.constructor = Spriteset_CardBattle;

    Spriteset_CardBattle.prototype.initialize = function() {
        Spriteset_Base.prototype.initialize.call(this);
    };

    Spriteset_CardBattle.prototype.createLowerLayer = function() {
        Spriteset_Base.prototype.createLowerLayer.call(this);
        this.createBackground();
        this.createBattleField();
        this.createTurnCursor();
        this.createPlayerCards();
        this.createEnemyCards();
        this.createNumberSprites();
        SceneManager._mpart = false; // new line
        this.create_mparticles();  // new line
    };
    // new line >>>>>
    Spriteset_CardBattle.prototype.create_mparticles = function() {
        this._self_par = false;
        SceneManager._mpart = true;
        if (String(TMPlugin.Card.mpart_selfpart) === "true") {this._self_par = true};
        this._sprite_particles = [];
        this._sprite_particles_data = [];
        this._nw = [0,0];
        if (TMPlugin.Card.mpart_ox > 0) {this._nw[0] = -(Graphics.boxWidth / 3)};
        if (TMPlugin.Card.mpart_ox < 0) {this._nw[0] =(Graphics.boxWidth / 3)};
        this._nw[1] = Math.abs(this._nw[0]);
        for (i = 0; i < TMPlugin.Card.mpart_number; i++) {
            this._sprite_particles.push(new Sprite(ImageManager.loadpar('Particles')));
            this.addChild(this._sprite_particles[i]);
            this._sprite_particles_data[i] = []
            this.reset_particles(i);
            this._sprite_particles[i].x = Math.randomInt(Graphics.boxWidth);
            this._sprite_particles[i].y = Math.randomInt(Graphics.boxHeight);
            this._sprite_particles[i].opacity = 0;
            this._sprite_particles[i].blendMode = TMPlugin.Card.mpart_blendMode;
        };
    };

    Spriteset_CardBattle.prototype.reset_particles = function(i) {
        this._sprite_particles_data[i][0] = ((Math.random() * 2) + 0.4) * TMPlugin.Card.mpart_ox
        this._sprite_particles_data[i][1] = ((Math.random() * 2) + 0.4) * TMPlugin.Card.mpart_oy
        this._sprite_particles_data[i][2] = ((Math.random() * TMPlugin.Card.mpart_a)) * 0.01;
        this._sprite_particles[i].opacity = 0;
        this._sprite_particles[i].x = this._nw[0] + Math.randomInt(Graphics.boxWidth);
        var pz = ((Math.random() * 0.5) * 1);
        this._sprite_particles[i].scale = new PIXI.Point(0.5 + Number(pz), 0.5 + Number(pz));
        if (TMPlugin.Card.mpart_oy < 0) {
            this._sprite_particles[i].y = Graphics.boxHeight + this._sprite_particles[i].height * 3;
        } else if (TMPlugin.Card.mpart_oy > 0) {
            this._sprite_particles[i].y = -this._sprite_particles[i].height * 3;
        } else {
            this._sprite_particles[i].y = Math.randomInt(Graphics.boxHeight);
        };
        if (this._sprite_particles_data[i][0] == 0 && this._sprite_particles_data[i][1] == 0) {
            this._sprite_particles[i].x = -Graphics.width
        };
    };  // <<<<< new line

    /* modification 7c changed backimage from map snapshot to png file
       the battle backshould be dependent on variable or
       event command change battle back
     */
    Spriteset_CardBattle.prototype.createBackground = function() {
        var xx = (Graphics.width - 816) / 2 // new line
        var width = Graphics.boxWidth;      // new line
        var height = Graphics.boxHeight;    // new line
        var x = (Graphics.width - width) / 2;  // new line
        var y = (Graphics.height - height) / 2; // new line
        this._backgroundSprite = new Sprite();
        //this._backgroundSprite.bitmap = ImageManager.loadPicture('cardbattle');
        //this._backgroundSprite.bitmap = SceneManager.backgroundBitmap(); // imageback
        //this._baseSprite.addChild(this._backgroundSprite);
        var abc  = TMPlugin.SBI.cardbattle;
        var index = abc.variableId ? $gameVariables.value(abc.variableId) - 1 : 0;
        var bgiName = index >= 0 ? abc.images[index] : null;
        this._backgroundSprite.bitmap = bgiName ?
            ImageManager.loadPicture(bgiName) : ImageManager.loadPicture('cardbattle');
        this._backgroundSprite.setFrame(x, y, width, height);
        this._backgroundSprite.x = x + xx; // editted line
        this._backgroundSprite.y = y;      // new line
        this._baseSprite.addChild(this._backgroundSprite);
    };

    Spriteset_CardBattle.prototype.createBattleField = function() {
        var xx = (Graphics.width - 816) / 2 // new line
        var width = Graphics.boxWidth;
        var height = Graphics.boxHeight;
        var x = (Graphics.width - width) / 2;
        var y = (Graphics.height - height) / 2;
        this._battleField = new Sprite();
        this._battleField.setFrame(x, y, width, height);
        this._battleField.x = x + xx; // editted line
        this._battleField.y = y;
        this._baseSprite.addChild(this._battleField);
    };

    Spriteset_CardBattle.prototype.createTurnCursor = function() {
        this._turnCursorSprite = new Sprite_TurnCursor();
        this._baseSprite.addChild(this._turnCursorSprite);
    };

    Spriteset_CardBattle.prototype.createPlayerCards = function() {
        this._playerCardSprites = [];
        var playerDeck = $gameCardBattle.playerDeck();
        for (var i = 0; i < playerDeck.size(); i++) {
            this._playerCardSprites[i] = new Sprite_Card(playerDeck.card(i), false);
            this._baseSprite.addChild(this._playerCardSprites[i]);
        }
        var itemCard = playerDeck.itemCard();
        if (itemCard) {
            var sprite = new Sprite_Card(itemCard, false);
            this._playerCardSprites.push(sprite);
            this._baseSprite.addChild(sprite);
        }
    };

    Spriteset_CardBattle.prototype.createEnemyCards = function() {
        this._enemyCardSprites = [];
        var enemyDeck = $gameCardBattle.enemyDeck();
        for (var i = 0; i < enemyDeck.size(); i++) {
            var hide = false;
            this._enemyCardSprites[i] = new Sprite_Card(enemyDeck.card(i), hide);
            this._baseSprite.addChild(this._enemyCardSprites[i]);
        }
        var itemCard = enemyDeck.itemCard();
        if (itemCard) {
            var sprite = new Sprite_Card(itemCard, false);
            this._enemyCardSprites.push(sprite);
            this._baseSprite.addChild(sprite);
        }
    };
    // handles coordinates of number sprites
    Spriteset_CardBattle.prototype.createNumberSprites = function() {
        var xx = (Graphics.width - 816) / 2 // new line
        var pos = TMPlugin.Card.NumberPositions[0];
        this._playerHpSprite = new Sprite_Number(pos[0] + xx, pos[1], 256, 128, 120, '#000000', 3, '#ffffff');
        this._baseSprite.addChild(this._playerHpSprite);
        pos = TMPlugin.Card.NumberPositions[1];
        this._playerAtkSprite = new Sprite_Number(pos[0] + xx, pos[1], 128, 64, 60, '#ff0000', 3, '#000000');
        this._baseSprite.addChild(this._playerAtkSprite);
        pos = TMPlugin.Card.NumberPositions[2];
        this._enemyHpSprite = new Sprite_Number(pos[0] + xx, pos[1], 256, 128, 120, '#000000', 3, '#ffffff');
        this._baseSprite.addChild(this._enemyHpSprite);
        pos = TMPlugin.Card.NumberPositions[3];
        this._enemyAtkSprite = new Sprite_Number(pos[0] + xx, pos[1], 128, 64, 60, '#ff0000', 3, '#000000');
        this._baseSprite.addChild(this._enemyAtkSprite);
        if ($gameCardBattle.playerDeck().itemCard()) {
            pos = TMPlugin.Card.PlayerItemCardPosition;
            this._playerChargeTimeSprite = new Sprite_Number(pos[0] + xx, pos[1], 96, 48, 45, '#0000ff', 3, '#ffffff');
            this._baseSprite.addChild(this._playerChargeTimeSprite);
        }
        if ($gameCardBattle.enemyDeck().itemCard()) {
            pos = TMPlugin.Card.EnemyItemCardPosition;
            this._enemyChargeTimeSprite = new Sprite_Number(pos[0] + xx, pos[1], 96, 48, 45, '#0000ff', 3, '#ffffff');
            this._baseSprite.addChild(this._enemyChargeTimeSprite);
        }
    };

    Spriteset_CardBattle.prototype.update = function() {
        Spriteset_Base.prototype.update.call(this);
        this.updateNumberSprites();
        this.update_particles();  // new line
    };

    // new line >>>>>
    Spriteset_CardBattle.prototype.update_particles = function() {
        for (var i = 0; i < this._sprite_particles.length; i++) {
            this._sprite_particles[i].x += this._sprite_particles_data[i][0];
            this._sprite_particles[i].y += this._sprite_particles_data[i][1];
            this._sprite_particles[i].opacity += 4;
            this._sprite_particles[i].rotation += this._sprite_particles_data[i][2];
            if (this.need_reset_particles(i)) { this.reset_particles(i);};
        };
    };

    Spriteset_CardBattle.prototype.need_reset_particles = function(i) {
        if (this._sprite_particles[i].x < -this._nw[1] - this._sprite_particles[i].width * 3) {return true};
        if (this._sprite_particles[i].x > this._nw[1] + Graphics.boxWidth + this._sprite_particles[i].width * 3) {return true};
        if (this._sprite_particles[i].y < - this._sprite_particles[i].height * 3) {return true};
        if (this._sprite_particles[i].y > Graphics.boxHeight + this._sprite_particles[i].height * 3) {return true};
        return false;
    }; // <<<<< new line

    Spriteset_CardBattle.prototype.updateNumberSprites = function() {
        this._playerHpSprite.setNumber($gameCardBattle.playerDeck().hpDraw);
        this._playerAtkSprite.setNumber($gameCardBattle.playerDeck().atkDraw);
        this._enemyHpSprite.setNumber($gameCardBattle.enemyDeck().hpDraw);
        this._enemyAtkSprite.setNumber($gameCardBattle.enemyDeck().atkDraw);
        if (this._playerChargeTimeSprite) {
            this._playerChargeTimeSprite.visible = this._playerCardSprites[this._playerCardSprites.length - 1].isGray();
            this._playerChargeTimeSprite.setNumber($gameCardBattle.playerDeck().chargeTime - 1);
        }
        if (this._enemyChargeTimeSprite) {
            this._enemyChargeTimeSprite.visible = this._enemyCardSprites[this._enemyCardSprites.length - 1].isGray();
            this._enemyChargeTimeSprite.setNumber($gameCardBattle.enemyDeck().chargeTime - 1);
        }
    };

    //-----------------------------------------------------------------------------
    // Window_MenuCommand
    //

    var _Window_MenuCommand_addMainCommands = Window_MenuCommand.prototype.addMainCommands;
    Window_MenuCommand.prototype.addMainCommands = function() {
        _Window_MenuCommand_addMainCommands.call(this);
        if ($gameParty.maxDeck() > 0) {
            this.addCommand(TMPlugin.Card.CommandDeckEdit, 'deckEdit', true);
        }
    };

    //-----------------------------------------------------------------------------
    // Window_DeckEdit
    //

    function Window_DeckEdit() {
        this.initialize.apply(this, arguments);
    }

    Window_DeckEdit.prototype = Object.create(Window_Selectable.prototype);
    Window_DeckEdit.prototype.constructor = Window_DeckEdit;

    Window_DeckEdit.prototype.initialize = function(x, y, selectMode) {
        var width = this.windowWidth();
        var height = this.fittingHeight(Math.min($gameParty.maxDeck(), 7));
        Window_Selectable.prototype.initialize.call(this, x, y, width, height);
        this._selectMode = selectMode;
        this.select(0);
        this.activate();
        this.refresh();
    };

    Window_DeckEdit.prototype.windowWidth = function() {
        return TMPlugin.Card.StatusWindowWidth;
    };

    Window_DeckEdit.prototype.update = function() {
        Window_Selectable.prototype.update.call(this);
        if (this._slotWindow) this._slotWindow.setDeckId(this.index());
    };

    Window_DeckEdit.prototype.maxItems = function() {
        return $gameParty.maxDeck();
    };

    Window_DeckEdit.prototype.drawItem = function(index) {
        var deckName = TMPlugin.Card.DeckNames[index];
        if (deckName) {
            var maxCost = $gameParty.maxCost();
            var deckCost = $gameParty.deckCost(index);
            var rect = this.itemRectForText(index);
            this.changePaintOpacity(this.isEnabled(index));
            this.drawTextEx(deckName, rect.x, rect.y, rect.width); //edited line
            this.drawText(deckCost + '/' + maxCost, rect.x, rect.y, rect.width, 'right');
            this.changePaintOpacity(1);
        }
    };

    Window_DeckEdit.prototype.isEnabled = function(index) {
        return this._selectMode ? $gameParty.isDeckValid(index) : true;
    };

    Window_DeckEdit.prototype.isCurrentItemEnabled = function() {
        return this.isEnabled(this.index());
    };

    Window_DeckEdit.prototype.setSlotWindow = function(slotWindow) {
        this._slotWindow = slotWindow;
        this.callUpdateHelp();
    };

    Window_DeckEdit.prototype.updateHelp = function() {
        Window_Selectable.prototype.updateHelp.call(this);
        if (this._selectMode) {
            this._helpWindow.setText('Select the deck to use.');
        } else {
            this._helpWindow.setText('Select a deck to edit.');
        }
    };

    //-----------------------------------------------------------------------------
    // Window_DeckEditStatus
    //

    function Window_DeckEditStatus() {
        this.initialize.apply(this, arguments);
    }

    Window_DeckEditStatus.prototype = Object.create(Window_Base.prototype);
    Window_DeckEditStatus.prototype.constructor = Window_DeckEditStatus;

    Window_DeckEditStatus.prototype.initialize = function(x, y) {
        var width = this.windowWidth();
        var height = Graphics.boxHeight - y;
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.createCardObject(0);
        this.createCardSprite();
        this.refresh();
        this.hide();
    };

    Window_DeckEditStatus.prototype.windowWidth = function() {
        return TMPlugin.Card.StatusWindowWidth;
    };

    Window_DeckEditStatus.prototype.setCard = function(card) {
        var cardId = card ? card.id : 0;
        if (this._card.id() !== cardId) {
            this.createCardObject(cardId);
            this._cardSprite.setCard(this._card);
            this.refresh();
        }
    };

    Window_DeckEditStatus.prototype.createCardObject = function(cardId) {
        this._card = new Game_Card(cardId);
        var padding = this.standardPadding();
        var xx = (Graphics.width - 816) / 2 // new line
        this._card.setPosition(padding + 96 - xx , padding + 144); //editted line
    };

    Window_DeckEditStatus.prototype.createCardSprite = function() {
        this._cardSprite = new Sprite_Card(this._card, false, 1000000);
        this.addChild(this._cardSprite);
    };

    Window_DeckEditStatus.prototype.refresh = function() {
        this.contents.clear();
        if (this._card.id() > 0) {
            var x = this.textPadding() + 200;
            var width = this.contents.width - x - this.textPadding();
            var x2 = this.textPadding();
            var width2 = this.contents.width - x2 - this.textPadding();
            var x3 = x + width - Window_Base._iconWidth;
            var lineHeight = this.lineHeight();
            this.changeTextColor(this.systemColor());
            this.contents.fontSize = 16;
            this.drawText(TMPlugin.Card.ParamNames[2], x, lineHeight * 5, width); // cost
            this.drawText(TMPlugin.Card.ParamNames[1], x, lineHeight * 6, width); // rarity
            if (this._card.type() === 4) {
                this.drawText(TMPlugin.Card.ItemCardParamNames[0], x, lineHeight * 1, width);
                this.drawText(TMPlugin.Card.ParamNames[5], x,	lineHeight * 0,	width);  // type
                this.drawText(TMPlugin.Card.ItemCardParamNames[1], x2, lineHeight * 8, width2);
                this.drawText(TMPlugin.Card.ItemCardParamNames[2], x2, lineHeight * 11, width2);
            } else {
                this.drawText(TMPlugin.Card.ParamNames[3], x, lineHeight * 2, width); // HP
                this.drawText(TMPlugin.Card.ParamNames[4], x, lineHeight * 3, width); // Attack
                this.drawText(TMPlugin.Card.ParamNames[5], x, lineHeight * 0, width); // type
                this.drawText(TMPlugin.Card.ParamNames[9], x, lineHeight * 1, width); // element
                this.drawText(TMPlugin.Card.ParamNames[7], x2, lineHeight * 8, width2); // unit
                this.drawText(TMPlugin.Card.ParamNames[8], x2, lineHeight * 11, width2);  // party
            }
            this.changeTextColor(this.normalColor());
            this.contents.fontSize = 28;
            this.drawText(this._card.cost(), x, lineHeight * 5, width, 'right');
            this.drawText(TMPlugin.Card.RareNames[this._card.rare()], x, lineHeight * 7 - 8, width, 'right');
            if (this._card.type() === 4) {
                this.drawText(this._card.hp(), x, lineHeight * 1, width, 'right');
                this.drawIcon(TMPlugin.Card.TypeIcons[this._card.type()], x3, lineHeight * 0);
            } else {
                this.drawText(this._card.hp(), x, lineHeight * 2, width, 'right');
                this.drawText(this._card.atk(), x, lineHeight * 3, width, 'right');
                this.drawIcon(TMPlugin.Card.TypeIcons[this._card.type()], x3, lineHeight * 0);
                this.drawIcon(TMPlugin.Card.ElementIcons[this._card.element()], x3, lineHeight * 1);
            }
            var unitSkill = $dataSkills[this._card.unitSkill()];
            if (unitSkill) this.drawSkill(unitSkill, x2, lineHeight * 9, width2);
            var partySkill = $dataSkills[this._card.partySkill()];
            if (partySkill) this.drawSkill(partySkill, x2, lineHeight * 12, width2);
        }
    };

    Window_DeckEditStatus.prototype.drawSkill = function(skill, x, y, width) {
        this.contents.fontSize = 28;
        this.drawItemName(skill, x, y - 8, width);
        this.contents.fontSize = 16;
        skill.description.split('\n').map(function(text, i) {
            this.drawText(text, x, y + this.lineHeight() - 16 + i * 20, width);
        }, this);
    };

    //-----------------------------------------------------------------------------
    // Window_DeckEditSlot
    //

    function Window_DeckEditSlot() {
        this.initialize.apply(this, arguments);
    }

    Window_DeckEditSlot.prototype = Object.create(Window_Selectable.prototype);
    Window_DeckEditSlot.prototype.constructor = Window_DeckEditSlot;

    Window_DeckEditSlot.prototype.initialize = function(x, y, width) {
        var height = this.fittingHeight(this.maxItems());
        Window_Selectable.prototype.initialize.call(this, x, y, width, height);
        this._deckId = 0;
        this.refresh();
    };

    Window_DeckEditSlot.prototype.setDeckId = function(deckId) {
        if (this._deckId !== deckId) {
            this._deckId = deckId;
            this.refresh();
            if (this._itemWindow) this._itemWindow.setDeckId(this._deckId);
        }
    };

    Window_DeckEditSlot.prototype.update = function() {
        Window_Selectable.prototype.update.call(this);
        if (this._itemWindow) this._itemWindow.setSlotId(this.index(),
            this.isItemCardSlot(this.index()));
    };

    Window_DeckEditSlot.prototype.maxItems = function() {
        return $gameParty.maxCard() + (TMPlugin.Card.UseItemCard ? 1 : 0);
    };

    Window_DeckEditSlot.prototype.item = function() {
        if (this._deckId < 0) return null;
        if (this.isItemCardSlot(this.index())) return $gameParty.itemCard(this._deckId);
        return $gameParty.cards(this._deckId)[this.index()];
    };

    Window_DeckEditSlot.prototype.isItemCardSlot = function(index) {
        return TMPlugin.Card.UseItemCard && (index === $gameParty.maxCard());
    };

    Window_DeckEditSlot.prototype.drawItem = function(index) {
        if (this.isItemCardSlot(index)) {
            var positionName = TMPlugin.Card.ItemCardPositionName;
            var card = $gameParty.itemCard(this._deckId);
        } else {
            var positionName = TMPlugin.Card.PositionNames[index];
            var card = $gameParty.cards(this._deckId)[index];
        }
        var rect = this.itemRectForText(index);
        this.changeTextColor(this.systemColor());
        this.contents.fontSize = 16;
        var positionNameWidth = this.textWidth(positionName);
        this.drawText(positionName, rect.x, rect.y, positionNameWidth);
        if (card) {
            this.changeTextColor(this.normalColor());
            this.contents.fontSize = 28;
            var x = rect.x + positionNameWidth + 8;
            this.drawItemName(card, x, rect.y, rect.width - x);
        }
    };

    Window_DeckEditSlot.prototype.isEnabled = function(index) {
        return true;
    };

    Window_DeckEditSlot.prototype.isCurrentItemEnabled = function() {
        return this.isEnabled(this.index());
    };

    Window_DeckEditSlot.prototype.setStatusWindow = function(statusWindow) {
        this._statusWindow = statusWindow;
        this.callUpdateHelp();
    };

    Window_DeckEditSlot.prototype.setItemWindow = function(itemWindow) {
        this._itemWindow = itemWindow;
        this.update();
    };

    Window_DeckEditSlot.prototype.updateHelp = function() {
        Window_Selectable.prototype.updateHelp.call(this);
        var maxCost = $gameParty.maxCost();
        var deckCost = $gameParty.deckCost(this._deckId);
        this._helpWindow.setText(TMPlugin.Card.DeckNames[this._deckId] +
            ' ( Total ' + TMPlugin.Card.ParamNames[2] +
            ' ' + deckCost + ' / ' + maxCost + ' )');
        if (this._statusWindow) {
            this._statusWindow.setCard(this.item());
        }
    };

    //-----------------------------------------------------------------------------
    // Window_DeckEditItem
    // here handles if cards can be equipped or not

    function Window_DeckEditItem() {
        this.initialize.apply(this, arguments);
    }

    Window_DeckEditItem.prototype = Object.create(Window_ItemList.prototype);
    Window_DeckEditItem.prototype.constructor = Window_DeckEditItem;

    Window_DeckEditItem.prototype.initialize = function(x, y, width, height) {
        Window_ItemList.prototype.initialize.call(this, x, y, width, height);
        this._deckId = 0;
        this._slotId = -1;
    };

    Window_DeckEditItem.prototype.maxCols = function() {
        return 1;
    };

    Window_DeckEditItem.prototype.setDeckId = function(deckId) {
        this._deckId = deckId;
    };

    Window_DeckEditItem.prototype.setSlotId = function(slotId, itemSlot) {
        if (this._slotId !== slotId) {
            this._slotId = slotId;
            var deckCost = $gameParty.deckCost(this._deckId);
            var cards = $gameParty.cards(this._deckId);
            var card = itemSlot ? $gameParty.itemCard(this._deckId) : cards[this._slotId];
            this._capacity = $gameParty.maxCost() - deckCost + (card ? +card.meta.cardCost : 0);
            this._otherSlotCardIds = [];
            for (var i = 0; i < $gameParty.maxCard(); i++) {
                if (this._slotId !== i && cards[i]) {
                    this._otherSlotCardIds.push(cards[i].id)
                }
            }
            this.refresh();
            this.resetScroll();
        }
    };
    // wether to include the card in the list
    Window_DeckEditItem.prototype.includes = function(item) {
        if (item === null) return true;
        if (item.meta.cardCost == null) return false;
        if (TMPlugin.Card.UseItemCard && this._slotId === $gameParty.maxCard()) {
            return +item.meta.cardType === 4;
        }
        return +item.meta.cardType < 4;
    };
    // wether to show the card in the list
    Window_DeckEditItem.prototype.isEnabled = function(item) {
        if (item === null) return true;
        if (!TMPlugin.Card.SameCard && this._otherSlotCardIds.contains(item.id)) {
            return false;
        }
        return this._capacity >= +item.meta.cardCost && item.id !== this._currentCardId;
    };

    Window_DeckEditItem.prototype.selectLast = function() {
    };

    Window_DeckEditItem.prototype.setStatusWindow = function(statusWindow) {
        this._statusWindow = statusWindow;
        this.callUpdateHelp();
    };

    Window_DeckEditItem.prototype.updateHelp = function() {
        if (this._statusWindow) this._statusWindow.setCard(this.item());
    };

    Window_DeckEditItem.prototype.playOkSound = function() {
    };

    //-----------------------------------------------------------------------------
    // Window_DeckSelectStatus
    //

    function Window_DeckSelectStatus() {
        this.initialize.apply(this, arguments);
    }

    Window_DeckSelectStatus.prototype = Object.create(Window_Base.prototype);
    Window_DeckSelectStatus.prototype.constructor = Window_DeckSelectStatus;

    Window_DeckSelectStatus.prototype.initialize = function(enemyName, enemyItemCardId, enemyCardIds) {
        this._enemyName = enemyName;
        this._enemyItemCardId = enemyItemCardId;
        this._enemyCardIds = enemyCardIds;
        var width = this.windowWidth();
        var height = this.fittingHeight(2) + 144;
        var x = (Graphics.boxWidth - width) / 2;
        var y = Graphics.boxHeight - height;
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.createCardObjects();
        this.createCardSprites();
        this.refresh();
    };

    Window_DeckSelectStatus.prototype.isItemCardValid = function() {
        return this._enemyItemCardId !== 0;
    };

    Window_DeckSelectStatus.prototype.windowWidth = function() {
        return (this._enemyCardIds.length + (this.isItemCardValid() ? 1 : 0)) * 112 - 16 +
            this.standardPadding() * 2;
    };

    Window_DeckSelectStatus.prototype.createCardObjects = function() {
        this._cards = [];
        var cardIds = this._enemyCardIds.concat();
        if (this.isItemCardValid()) cardIds.push(this._enemyItemCardId);
        for (var i = 0; i < cardIds.length; i++) {
            var card = new Game_Card(cardIds[i]);
            var xx = (Graphics.width - 816) / 2 // new line
            var x = this.standardPadding() + i * 112 + 48 - xx; // editted line
            var y = this.standardPadding() + this.lineHeight() * 2 + 72;
            card.setPosition(x, y);
            card.setScale(0.5, 0.5);
            this._cards.push(card);
        }
    };

    Window_DeckSelectStatus.prototype.createCardSprites = function() {
        this._cardSprites = [];
        for (var i = 0; i < this._cards.length; i++) {
            var sprite = new Sprite_Card(this._cards[i], false, 1000000);
            this._cardSprites.push(sprite);
            this.addChild(sprite);
        }
    };

    Window_DeckSelectStatus.prototype.refresh = function() {
        this.contents.clear();
        this.changeTextColor(this.normalColor());
        this.drawText(this._enemyName, 0, 0, this.contents.width, 'center');
        this.changeTextColor(this.systemColor());
        for (var i = 0; i < this._enemyCardIds.length; i++) {
            var x = i * 112;
            this.drawText(TMPlugin.Card.PositionNames[i], x, this.lineHeight(), 96, 'center');
        }
        if (this.isItemCardValid()) {
            this.drawText(TMPlugin.Card.ItemCardPositionName, (this._cards.length - 1) * 112,
                this.lineHeight(), 96, 'center');
        }
    };

    //-----------------------------------------------------------------------------
    // Window_CardBattleStatus
    //

    function Window_CardBattleStatus() {
        this.initialize.apply(this, arguments);
    }

    Window_CardBattleStatus.prototype = Object.create(Window_Base.prototype);
    Window_CardBattleStatus.prototype.constructor = Window_CardBattleStatus;

    Window_CardBattleStatus.prototype.initialize = function(x, y) {
        var width = this.windowWidth();
        var height = this.lineHeight() + 20 + this.standardPadding() * 2;
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.opacity = 0;
        this.refresh();
    };

    Window_CardBattleStatus.prototype.windowWidth = function() {
        return Graphics.boxWidth;
    };

    Window_CardBattleStatus.prototype.refresh = function() {
        this.contents.clear();
        var x = this.textPadding();
        var width = this.contents.width - x * 2;
        var lineHeight = this.lineHeight();
        this.contents.fontSize = 28;
        this.contents.textColor = '#17ff3a';  // green for player
        this.drawText($gameCardBattle.playerDeck().userName(), x + 200 , 0, width, 'left');
        this.contents.textColor = '#ff2a17'; // red for enemy
        this.drawText($gameCardBattle.enemyDeck().userName(), x - 200, 0, width, 'right');
        this.contents.fontSize = 16;
        this.contents.textColor = '#ffffff'; // restore next font to white
        this.contents.drawText('Total ' + TMPlugin.Card.ParamNames[2] + ': ' +
            $gameCardBattle.playerDeck().cost(), x + 200 , lineHeight,
            width, 20, 'left');
        this.contents.drawText('Total ' + TMPlugin.Card.ParamNames[2] + ': ' +
            $gameCardBattle.enemyDeck().cost(), x - 200 , lineHeight,
            width, 20, 'right');
        // new line display word VS
        this.contents.fontSize = 48;
        this.contents.fontFace = "Arial Rounded MT Bold";
        this.contents.textColor = '#61aef2';
        this.contents.outlineWidth = 4;
        this.contents.outlineColor = '#ffffff';
        this.drawText('VS', x, 8, width, 'center');
    };


    //-----------------------------------------------------------------------------
    // Window_CardBattleMessage
    //

    function Window_CardBattleMessage() {
        this.initialize.apply(this, arguments);
    }

    Window_CardBattleMessage.prototype = Object.create(Window_Base.prototype);
    Window_CardBattleMessage.prototype.constructor = Window_CardBattleMessage;

    Window_CardBattleMessage.prototype.initialize = function(x, y) {
        var width = this.windowWidth();
        var height = this.fittingHeight(1);
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.setBackgroundType(1);
        this._waitFlag = false;
    };

    Window_CardBattleMessage.prototype.windowWidth = function() {
        return Graphics.boxWidth;
    };

    Window_CardBattleMessage.prototype.refresh = function() {
        this.contents.clear();
        this.drawTextEx(this._message, 0, 0, this.contents.width);  // option colored text
    };

    Window_CardBattleMessage.prototype.update = function() {
        Window_Base.prototype.update.call(this);
        if (this._waitFlag) {
            if (Input.isRepeated('ok') || TouchInput.isRepeated()) {
                this._waitFlag = false;
            }
        } else {
            this._message = $gameCardBattle.getMessage();
            if (this._message) {
                this.refresh();
                this._waitFlag = true;
            }
        }
    };

    //-----------------------------------------------------------------------------
    // Scene_Menu
    //

    var _Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
    Scene_Menu.prototype.createCommandWindow = function() {
        _Scene_Menu_createCommandWindow.call(this);
        this._commandWindow.setHandler('deckEdit', this.commandDeckEdit.bind(this));
    };

    Scene_Menu.prototype.commandDeckEdit = function() {
        SceneManager.push(Scene_DeckEdit);
    };

    //-----------------------------------------------------------------------------
    // Scene_DeckEdit
    //

    function Scene_DeckEdit() {
        this.initialize.apply(this, arguments);
    }

    Scene_DeckEdit.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_DeckEdit.prototype.constructor = Scene_DeckEdit;

    Scene_DeckEdit.prototype.initialize = function() {
        Scene_MenuBase.prototype.initialize.call(this);
    };

    Scene_DeckEdit.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
        this.createHelpWindow();
        this.createDeckWindow();
        this.createStatusWindow();
        this.createSlotWindow();
        this.createItemWindow();
    };

    Scene_DeckEdit.prototype.createHelpWindow = function() {
        this._helpWindow = new Window_Help(1);
        this.addWindow(this._helpWindow);
    };

    Scene_DeckEdit.prototype.createDeckWindow = function() {
        this._deckWindow = new Window_DeckEdit(0, this._helpWindow.height, false);
        this._deckWindow.setHandler('ok',		 this.onDeckOk.bind(this));
        this._deckWindow.setHandler('cancel', this.popScene.bind(this));
        this._deckWindow.setHelpWindow(this._helpWindow);
        this.addWindow(this._deckWindow);
    };

    Scene_DeckEdit.prototype.createStatusWindow = function() {
        this._statusWindow = new Window_DeckEditStatus(0, this._helpWindow.height);
        this.addWindow(this._statusWindow);
    };

    Scene_DeckEdit.prototype.createSlotWindow = function() {
        var wx = this._statusWindow.width;
        var wy = this._helpWindow.height;
        var ww = Graphics.boxWidth - this._statusWindow.width;
        this._slotWindow = new Window_DeckEditSlot(wx, wy, ww);
        this._slotWindow.setHelpWindow(this._helpWindow);
        this._slotWindow.setStatusWindow(this._statusWindow);
        this._slotWindow.setHandler('ok',		 this.onSlotOk.bind(this));
        this._slotWindow.setHandler('cancel', this.onSlotCancel.bind(this));
        this._deckWindow.setSlotWindow(this._slotWindow);
        this.addWindow(this._slotWindow);
    };

    Scene_DeckEdit.prototype.createItemWindow = function() {
        var wx = this._slotWindow.x;
        var wy = this._slotWindow.y + this._slotWindow.height;
        var ww = Graphics.boxWidth - wx;
        var wh = Graphics.boxHeight - wy;
        this._itemWindow = new Window_DeckEditItem(wx, wy, ww, wh);
        this._itemWindow.setHelpWindow(this._helpWindow);
        this._itemWindow.setStatusWindow(this._statusWindow);
        this._itemWindow.setHandler('ok',		 this.onItemOk.bind(this));
        this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
        this._slotWindow.setItemWindow(this._itemWindow);
        this.addWindow(this._itemWindow);
    };

    Scene_DeckEdit.prototype.onDeckOk = function() {
        this._slotWindow.activate();
        this._slotWindow.select(0);
        this._deckWindow.hide();
        this._statusWindow.show();
    };

    Scene_DeckEdit.prototype.onSlotOk = function() {
        this._itemWindow.activate();
        this._itemWindow.select(0);
    };

    Scene_DeckEdit.prototype.onSlotCancel = function() {
        this._slotWindow.deselect();
        this._deckWindow.refresh();
        this._deckWindow.activate();
        this._deckWindow.show();
        this._statusWindow.hide();
    };

    Scene_DeckEdit.prototype.onItemOk = function() {
        SoundManager.playEquip();
        $gameParty.changeCard(this._deckWindow.index(), this._slotWindow.index(),
            this._itemWindow.item());
        this._slotWindow.activate();
        this._slotWindow.refresh();
        this._itemWindow.deselect();
        this._itemWindow.refresh();
        this._statusWindow.refresh();
    };

    Scene_DeckEdit.prototype.onItemCancel = function() {
        this._slotWindow.activate();
        this._itemWindow.deselect();
    };

    //-----------------------------------------------------------------------------
    // Scene_DeckSelect
    //

    function Scene_DeckSelect() {
        this.initialize.apply(this, arguments);
    }

    Scene_DeckSelect.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_DeckSelect.prototype.constructor = Scene_DeckSelect;

    Scene_DeckSelect.prototype.initialize = function() {
        Scene_MenuBase.prototype.initialize.call(this);
    };

    Scene_DeckSelect.prototype.prepare = function(enemyName, enemyItemCardId, enemyCardIds) {
        this._enemyName = enemyName;
        this._enemyItemCardId = enemyItemCardId;
        this._enemyCardIds = enemyCardIds;
    };

    Scene_DeckSelect.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
        this.createHelpWindow();
        this.createDeckWindow();
        this.createSlotWindow();
        this.createStatusWindow();
    };

    Scene_DeckSelect.prototype.createHelpWindow = function() {
        this._helpWindow = new Window_Help(1);
        this.addWindow(this._helpWindow);
    };

    Scene_DeckSelect.prototype.createDeckWindow = function() {
        this._deckWindow = new Window_DeckEdit(0, this._helpWindow.height, true);
        this._deckWindow.setHandler('ok',		 this.onDeckOk.bind(this));
        this._deckWindow.setHandler('cancel', this.popScene.bind(this));
        this._deckWindow.setHelpWindow(this._helpWindow);
        this.addWindow(this._deckWindow);
    };

    Scene_DeckSelect.prototype.createSlotWindow = function() {
        var wx = this._deckWindow.width;
        var wy = this._helpWindow.height;
        var ww = Graphics.boxWidth - wx;
        this._slotWindow = new Window_DeckEditSlot(wx, wy, ww);
        this._deckWindow.setSlotWindow(this._slotWindow);
        this.addWindow(this._slotWindow);
    };

    Scene_DeckSelect.prototype.createStatusWindow = function() {
        this._statusWindow = new Window_DeckSelectStatus(this._enemyName,
            this._enemyItemCardId, this._enemyCardIds);
        this.addWindow(this._statusWindow);
    };

    Scene_DeckSelect.prototype.onDeckOk = function() {
        $gameParty.setActiveDeck(this._deckWindow.index());
        SceneManager.goto(Scene_CardBattle);
        SceneManager.prepareNextScene(this._enemyName, this._enemyItemCardId, this._enemyCardIds);
    };

    Scene_DeckSelect.prototype.popScene = function() {
        Scene_MenuBase.prototype.popScene.call(this);
        $gameVariables.setValue(TMPlugin.Card.VNResult, -1);
        var oldValue = $gameVariables.value(TMPlugin.Card.VNCancel);//new line
        $gameVariables.setValue(TMPlugin.Card.VNCancel, oldValue + 1);//new line
    };

    //-----------------------------------------------------------------------------
    // Scene_CardBattle
    //

    function Scene_CardBattle() {
        this.initialize.apply(this, arguments);
    }
    // scene card battle is under scene_base
    Scene_CardBattle.prototype = Object.create(Scene_Base.prototype);
    Scene_CardBattle.prototype.constructor = Scene_CardBattle;
    /* normally the game will use the music set in Music Battle
       BGM music should be dependent to situations controlled using a variable
       you can use event command to change battle BGM
       however it is more covenient for it to be inscript than in common event
    */
    Scene_CardBattle.prototype.initialize = function() {
        Scene_Base.prototype.initialize.call(this);
        BattleManager.saveBgmAndBgs();
        var abc  = TMPlugin.SBM.cardmusic;
        var index = abc.variableId ? $gameVariables.value(abc.variableId) - 1 : 0;
        var bgmName = index >= 0 ? abc.name[index] : null;
        var bgm = {"name":bgmName,"pan":abc.pan,"pitch":abc.pitch,"volume":abc.pitch};
        if (bgmName !== null){
        AudioManager.playBgm(bgm);
        } else {
        BattleManager.playBattleBgm();
        }
        $gameScreen.startTint([0,0,0,0], 0); // compatibility with auto tint time system
    };

    Scene_CardBattle.prototype.prepare = function(enemyName, enemyItemCardId, enemyCardIds) {
        $gameCardBattle.setDecks(enemyName, enemyItemCardId, enemyCardIds);
    };

    Scene_CardBattle.prototype.create = function() {
        Scene_Base.prototype.create.call(this);
        this.createDisplayObjects();
    };

    Scene_CardBattle.prototype.createDisplayObjects = function() {
        this.createSpriteset();
        this.createWindowLayer();
        this.createAllWindows();
    };

    Scene_CardBattle.prototype.createSpriteset = function() {
        this._spriteset = new Spriteset_CardBattle();
        this.addChild(this._spriteset);
    };

    Scene_CardBattle.prototype.createAllWindows = function() {
        this.createStatusWindow();
        this.createMessageWindow();
    };

    Scene_CardBattle.prototype.createStatusWindow = function() {
        this._statusWindow = new Window_CardBattleStatus(0, 0);
        this.addWindow(this._statusWindow);
    };

    Scene_CardBattle.prototype.createMessageWindow = function() {
        this._messageWindow = new Window_CardBattleMessage(0, TMPlugin.Card.MessageWindowY);
        this.addWindow(this._messageWindow);
    };

    Scene_CardBattle.prototype.update = function() {
        this.updateMain();
        Scene_Base.prototype.update.call(this);
    };

    Scene_CardBattle.prototype.updateMain = function() {
        var active = this.isActive();
        $gameCardBattle.update(active);
    };
})();
