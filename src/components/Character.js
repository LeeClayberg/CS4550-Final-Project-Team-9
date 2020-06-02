import React, {Fragment} from 'react'
import SearchService from "../services/SearchService";
import parse, { domToReact } from 'html-react-parser';
import CharacterRelatedCover from "./CharacterRelatedCover";
import {Link} from "react-router-dom";

class Character extends React.Component {
    state = {
        character: null,
        related: []
    }

    componentDidMount() {
        this.reload()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.id !== this.props.match.params.id) {
            window.scrollTo({top: 0, behavior: "smooth"});
            this.reload();
        }
    }

    reload = () =>
        SearchService.findCharacterById(this.props.match.params.id)
            .then(issue => issue.results)
            .then(character => {
                this.setState({
                                  character: character
                              });
                SearchService.characterRelated(character.name)
                    .then(issues => {
                        this.setState({
                                          related: issues.results
                                      })})})

    displayList = (character, i) => {
        return (
            <span>
                <Link to={`/character/${character.id}`} className={"wbdv-character-link"}>
                    {character.name}
                </Link>
                {(i < this.state.character.character_enemies.length - 1) ?
                ", " : ""}
            </span>
        )
    }

    displayListTooltip = (character, i) => {
        return " " + character.name;
    }

    render() {
        if(!this.state.character) {
            return (<div/>)
        }
        return (
            <div className="row">
                <div className="col-lg-8">
                    <div className="wbdv-issue-info">
                        <span className="row">
                            <div className="col-lg-5">
                                <img className="wbdv-issue-cover" src={this.state.character.image.super_url}
                                     alt="Card image cap"/>
                            </div>
                            <span className="col-lg-7 wbdv-basic-top-outer">
                                <div className="wbdv-character-top-info">
                                    <div className="row wbdv-character-info-row">
                                        <div className="col-3 wbdv-info-row-column font-weight-bold">
                                            Name:
                                        </div>
                                        <div className="col-9 wbdv-info-row-column text-right text-truncate">
                                            {this.state.character.name}
                                        </div>
                                    </div>
                                    <div className="row wbdv-character-info-row">
                                        <div className="col-6 wbdv-info-row-column font-weight-bold">
                                            Real Name:
                                        </div>
                                        <div className="col-6 wbdv-info-row-column text-right text-truncate">
                                            {this.state.character.real_name}
                                        </div>
                                    </div>
                                    <div className="row wbdv-character-info-row">
                                        <div className="col-4 wbdv-info-row-column font-weight-bold">
                                            Birth Date:
                                        </div>
                                        <div className="col-8 wbdv-info-row-column text-right text-truncate">
                                            {this.state.character.birth}
                                        </div>
                                    </div>
                                    <div className="row wbdv-character-info-row">
                                        <div className="col-4 wbdv-info-row-column font-weight-bold">
                                            Publisher:
                                        </div>
                                        <div className="col-8 wbdv-info-row-column text-right text-truncate">
                                            {this.state.character.publisher.name}
                                        </div>
                                    </div>
                                    <div className="row wbdv-character-info-row">
                                        <div className="col-6 wbdv-info-row-column font-weight-bold">
                                            First Issue:
                                        </div>
                                        <div className="col-6 wbdv-info-row-column text-right text-truncate"
                                            title={this.state.character.first_appeared_in_issue.name}>
                                            <Link to={`/issue/${this.state.character.first_appeared_in_issue.id}`}
                                                className={"wbdv-character-link"}>
                                            {this.state.character.first_appeared_in_issue.name}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row wbdv-character-info-row">
                                        <div className="col-6 wbdv-info-row-column font-weight-bold">
                                            Appearances:
                                        </div>
                                        <div className="col-6 wbdv-info-row-column text-right text-truncate">
                                            {this.state.character.count_of_issue_appearances}
                                        </div>
                                    </div>
                                </div>
                                <div className="wbdv-top-spacer"/>
                                <div className="wbdv-character-top-chars"
                                     title={this.state.character.character_enemies.map(this.displayListTooltip)}>
                                    <div className="font-weight-bold wbdv-section-title">Enemies</div>
                                    {this.state.character.character_enemies.map(this.displayList)}
                                </div>
                            </span>
                        </span>
                        <div className="wbdv-issue-description">
                            <div className="font-weight-bold wbdv-section-title">Description</div>
                            {this.state.character.description?
                             parse(this.state.character.description, {replace: ({ attribs, children }) => {
                                     if (!attribs) return;
                                     if (attribs.href) {
                                         return React.createElement('a', {}, domToReact(children,))}}}):
                             "N/A"}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="wbdv-issue-reviews">
                        <div className="wbdv-character-related">
                            Related Issues
                        </div>
                        <div className="row row-cols-3 row-cols-lg-2 wbdv-cover-row">
                            {
                                this.state.related.map(issue =>
                                                           <CharacterRelatedCover
                                                               id={issue.id}
                                                               issue={issue}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Character